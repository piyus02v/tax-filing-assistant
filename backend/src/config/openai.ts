import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const MODELS = {
  EMBEDDING: 'text-embedding-ada-002',
  GENERATION: 'gpt-4-turbo-preview'
};
