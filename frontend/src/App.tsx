import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🇮🇳 Tax Filing Assistant
          </h1>
          <p className="text-lg text-gray-600">
            AI-Powered RAG System for Indian Tax Forms
          </p>
        </header>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
          <p className="text-gray-700 mb-4">
            This is a production-ready RAG system for Indian tax filing.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold">🚀 Next Steps:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Setup environment variables (.env)</li>
              <li>Run document ingestion</li>
              <li>Start using AI suggestions!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
