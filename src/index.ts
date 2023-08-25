import x1 from './file.js';
import x2 from './file.cjs';
console.log(x1);
console.log(x2);


import * as dotenv from 'dotenv';
dotenv.config()
console.log('NODE_ENV: ', process.env.NODE_ENV);

// const express = require('express');
import express, { Express, Request, Response } from 'express';

// const cors = require('cors');
import cors from 'cors';

// ==============================================

const server = express();

// middleware
server.use(express.json());
server.use(cors());

// ==============================================

server.use('*', (req: Request, res: Response) => {
  res.send('<h1>Success!</h1>');
});

// ==============================================

const PORT = process.env.PORT ?? 5000;
server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});