
#!/bin/sh

cd frontend
npm run build

rm -rf ../backend/public

mkdir ../backend/public 

pwd

cd ..

mv ./frontend/dist/* ./backend/public/

cd backend

npm run build

node dist/main.js