import 'dotenv/config.js'
import app from '../src/app.js';
const port = normalizaPort(process.env.PORT || '3000');

import { createServer } from 'http';

function normalizaPort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

var server = createServer(app);

server.listen(port, function () {
    console.log(`API Rodando na Porta: ${port}`)
})