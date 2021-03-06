const express = require('express')
const router = require('./routes');
const morgan = require('morgan')
const app = express()

const PORT = 3000

app.use(express.json());
app.use(morgan('dev'))

app.use('/upload', router)

app.listen(PORT, () => console.log(`Rodando na porta: ${PORT}!`))