import express from 'express';
const app = express();

import index from './routes/index.js';
import boletoRoute from './routes/boletoRoute.js';

app.use('/', index);
app.use('/boleto', boletoRoute);

export default app;