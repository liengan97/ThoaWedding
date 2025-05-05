#!/bin/bash

# Exit if any command fails
set -e

echo "📦 Building Frontend..."
cd frontend
npm install
npm run build
mv dist ../backend/public/ # Move build output into backend

echo "🚀 Building Backend..."
cd ../backend
npm install

echo "✅ Build Complete!"
