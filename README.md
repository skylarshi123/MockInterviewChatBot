# Mock Interviewer Chat Bot

## Overview

The Mock Interviewer Chat Bot is an AI-powered application designed to help users prepare for technical interviews. It simulates a real interview experience by asking LeetCode-style questions, providing feedback, and engaging in a conversational manner to improve users' problem-solving skills and coding abilities.

## Features

- AI-driven mock interviewer that asks technical questions
- Real-time chat interface for seamless interaction
- Syntax highlighting for code snippets in responses
- Responsive design for various screen sizes
- Home page with project description and data structure visualization
- Easy navigation between home and chat pages

## Technologies Used

- Next.js
- React
- Material-UI
- OpenAI API
- React Markdown
- Syntax Highlighter

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mock-interviewer-chatbot.git
   cd mock-interviewer-chatbot
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure

- `app/` - Next.js app directory
  - `page.js` - Home page component
  - `chat/page.js` - Chat interface component
  - `api/chat/route.js` - API route for chat functionality
- `public/` - Static files including images
- `components/` - Reusable React components (if any)

## Usage

1. Start on the home page to read about the Mock Interviewer Chat Bot.
2. Click on "Start Chatting" to begin the mock interview.
3. Interact with the AI interviewer by typing your responses in the chat interface.
4. Use the home button in the chat interface to return to the home page at any time.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- OpenAI for providing the AI model
- Next.js team for the amazing framework
- All contributors and supporters of the project