require('dotenv').config();
const express = require('express')
const router = require('./routes');
const morgan = require('morgan')
const path = require('path');
const cors = require('cors');

const app = express()

const { PORT } = process.env || 3000

app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

app.use('/upload', router)

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}!`))