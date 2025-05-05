#!/bin/bash

# Exit if any command fails
set -e

echo "📦 Building Frontend..."
cd frontend

rm -rf dist

npm install
npm run build

echo 'Removing /backend/public' folder
rm -rf ../backend/public

echo 'Creating /public folder'
mkdir ../backend/public

echo 'Move build output into backend'
mv dist/* ../backend/public/ # Move build output into backend

echo "🚀 Building Backend..."
cd ../backend
npm install

echo "✅ Build Complete!"

ls -al
ls -al public
ls -al dist