#!/bin/sh

mkdir -p frontend && cd frontend
npm create vite@latest . --template react
npm install firebase
npm install -D tailwindcss postcss autoprefixer
# npx tailwindcss init -p

touch tailwind.config.js

echo '
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
' > tailwind.config.js