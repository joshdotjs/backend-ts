console.log(process.env);
console.log('NODE_ENV: ', process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  // require('dotenv').config();
  const dotenv = await import('dotenv'); // top level await / non-top level import 🤯
  dotenv.config();
}


// const express = require('express');
import express from 'express';

// const cors = require('cors');
import cors from 'cors';

const server = express();

// middleware
server.use(express.json());

