import * as dotenv from 'dotenv'
dotenv.config()
console.log('NODE_ENV: ', process.env.NODE_ENV);

// const express = require('express');
import express from 'express';

// const cors = require('cors');
import cors from 'cors';

// ==============================================

const server = express();

// middleware
server.use(express.json());
server.use(cors());

// ==============================================

server.use('*', (req, res) => {
  res.send('<h1>Success!</h1>');
});

// ==============================================

const PORT = process.env.PORT ?? 5000;
server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});