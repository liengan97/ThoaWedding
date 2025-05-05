#!/bin/sh

# mkdir backend && cd backend
nest new backend
cd backend
npm install firebase
npm install express

nest generate module firebase
nest generate controller firebase
nest generate service firebase
