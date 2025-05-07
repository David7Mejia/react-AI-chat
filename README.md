# Simple LLM Responsive Chat UI built on React.

The app connects to OpenAI API thorugh assistants and the Gemini API. The app uses streaming for completion. The UI handles streamed responses in React Markdown as well as smooth scrolling to allow the user to keep track of the lates message being sent or received in the UI. 

## Test Locally 
```git clone git@github.com:David7Mejia/react-AI-chat.git```

## Install Dependencies 
``` npm i```

## Provide API key to Gemini 1.5 Flash or OpenAI
``` touch .env.local```
```
VITE_GOOGLEAI_API_KEY=your-googleai-api-key
VITE_OPENAI_API_KEY=your-openai-api-key
```
![image](https://github.com/David7Mejia/react-AI-chat/blob/main/public/React-ChatUI.PNG)
