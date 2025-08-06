# Chat Room

This is an Angular application with the following key dependencies:

## Dependencies

### Frontend Dependencies
- **NgRx Component Store** - State management for components
- **Tailwind CSS** - Utility-first CSS framework for styling

### Backend Dependencies
- **tsx** - TypeScript execution engine for server-side development
- **openai** - OpenAI API client for AI integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. For server-side development with tsx:
```bash
npx tsx server-example.ts
```

## Features

- **NgRx Component Store**: Demonstrates state management with a counter and messages example
- **Tailwind CSS**: Modern, responsive UI with utility classes
- **TypeScript**: Full TypeScript support for both frontend and backend
- **OpenAI Integration**: Ready for AI features (requires OPENAI_API_KEY environment variable)

## Project Structure

```
chat-room/
├── src/
│   ├── app/
│   │   ├── app.ts          # Main component with NgRx Component Store
│   │   ├── app.html        # Template with Tailwind CSS
│   │   └── app.scss        # Component styles
│   ├── styles.scss         # Global styles with Tailwind directives
│   └── main.ts            # Application entry point
├── server-example.ts      # Example server using tsx and openai
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## Usage Examples

### NgRx Component Store
The app component demonstrates NgRx Component Store usage with:
- State management for counter and messages
- Selectors for reactive data access
- Updaters for state modifications

### Tailwind CSS
The UI is built with Tailwind CSS classes for:
- Responsive design
- Modern styling
- Utility-first approach

### Server Development
Use `tsx` for server-side TypeScript development:
```bash
npx tsx server-example.ts
```

### OpenAI Integration
The server example shows how to integrate with OpenAI API:
```typescript
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
```

## Environment Variables

For OpenAI integration, set the following environment variable:
```bash
export OPENAI_API_KEY="your-openai-api-key"
```
