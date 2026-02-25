// Document ingestion script
import fs from 'fs';
import pdfParse from 'pdf-parse';
import { openai, MODELS } from '../src/config/openai';
import { qdrantClient, COLLECTIONS } from '../src/config/vector-db';

async function ingestDocuments() {
  console.log('Starting document ingestion...');
  
  // 1. Read PDFs from data/pdfs/
  // 2. Parse and chunk text
  // 3. Generate embeddings
  // 4. Store in Qdrant
  
  console.log('✓ Ingestion complete');
}

ingestDocuments().catch(console.error);
