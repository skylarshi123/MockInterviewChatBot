"use client";

import Image from "next/image";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([{
    role: "assistant",
    content: `Hi I'm your mock interviewer. I'm here to help you with the technical interview.`,
  }]);

  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);
    setMessage("");

    const response = fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, {role: 'user', content: message}]),
    }).then(async (res) => {
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      
      let result = ''
      return reader.read().then(function processText({done, value}){
        if (done) {
          return result
        }
        const text = decoder.decode(value || new Uint8Array(), {stream: true})
        setMessages((prevMessages) => {
          let lastMessage = prevMessages[prevMessages.length-1]
          let otherMessages = prevMessages.slice(0, prevMessages.length-1)
          return [
            ...otherMessages,
            {
              ...lastMessage,
              content: lastMessage.content + text,
            },
          ]
        })
        return reader.read().then(processText)
      })
    })
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: message.role === 'assistant' ? 'flex-start' : 'flex-end',
              marginBottom: '10px',
            }}
          >
            <Box
              sx={{
                maxWidth: '70%',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: message.role === 'assistant' ? 'primary.main' : 'secondary.main',
                color: 'white',
              }}
            >
              <Typography>{message.content}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex' }}>
        <TextField
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message here..."
          sx={{ marginRight: '10px' }}
        />
        <Button variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
}