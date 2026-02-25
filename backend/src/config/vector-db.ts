import { QdrantClient } from '@qdrant/js-client-rest';

export const qdrantClient = new QdrantClient({
  url: process.env.QDRANT_URL || 'http://localhost:6333',
  apiKey: process.env.QDRANT_API_KEY
});

export const COLLECTIONS = {
  ITR_DOCUMENTS: 'itr_documents',
  GST_DOCUMENTS: 'gst_documents'
};
