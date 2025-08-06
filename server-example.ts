// Example server using tsx and openai
import { OpenAI } from 'openai';

// Initialize OpenAI client (you'll need to set OPENAI_API_KEY environment variable)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function exampleOpenAIUsage() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: 'Hello! Can you tell me a short joke?',
        },
      ],
    });

    console.log('OpenAI Response:', completion.choices[0]?.message?.content);
  } catch (error) {
    console.error('Error calling OpenAI:', error);
  }
}

// Example of using tsx for server-side TypeScript execution
console.log('Server example running with tsx and openai...');
exampleOpenAIUsage();

// Simple HTTP server example
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from tsx server!\n');
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
