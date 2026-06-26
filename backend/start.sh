#!/bin/bash

# Activate virtual environment
source venv/bin/activate

# Start FastAPI server
echo "🚀 Starting Agarasar Cooperative Backend (FastAPI)"
echo "📚 API Documentation: http://localhost:5000/docs"
echo "🔧 Health Check: http://localhost:5000/health"
echo ""
uvicorn main:app --reload --port 5000
