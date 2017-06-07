require('dotenv').config();
require('./models');

const db = require('./db');
const cors = require('cors');
const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.DB_PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api',routes);

db(process.env.DB_CONNECTION_STRING);

app.listen(port,()=>{
    console.log('app running in port ' + port);
});