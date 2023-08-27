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

import { readFileSync, writeFileSync } from 'fs';

// ==============================================

const server = express();

// middleware
server.use(express.json());
server.use(cors());

// ==============================================

server.use('/home', (req: Request, res: Response) => {

  const count = readFileSync('count.txt', 'utf-8');
  console.log('count: ', count);

  const new_count = parseInt(count) + 1;

  writeFileSync('count.txt', new_count.toString());

  const html = `
    <htnl>
      <head></head>
      <body style="height: 100vh; display: grid; place-items: center;">
        <h1>Success with TypeScript!</h1>
        <h5>This HTML is the response of a GET request to our deployed Node.js endpoint <code>/home</code>.</h5>
        <p>count: ${new_count}</p>
      </body>
    </html>
  `;

  res.send(html);
});


// ==============================================

server.use('*', (req: Request, res: Response) => {
  const html = `
    <htnl>
      <head></head>
      <body>
        <h1>404 - catch all endpoint</h1>
      </body>
    </html>
  `;
  res.send(html);
});

// ==============================================

const PORT = process.env.PORT ?? 5000;
server.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});