import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography, Button, Container } from '@mui/material';

export default function WelcomePage() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Mock Interviewer Chat Bot
        </Typography>
        <Image
          src="/datastructures.jpg"  // Place your image in the public folder
          alt="Data Structure Visualization"
          width={400}
          height={300}
        />
        <Typography variant="body1" sx={{ mt: 2, mb: 4, textAlign: 'center' }}>
          Our AI-powered chatbot is designed to help you prepare for technical interviews.
          It simulates a real interview experience, asking you LeetCode-style questions
          and providing feedback on your answers.
        </Typography>
        <Button component={Link} href="/chat" variant="contained" size="large">
          Start Chatting
        </Button>
      </Box>
    </Container>
  );
}