
const cors = require('cors')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const dotenv = require('dotenv');
dotenv.config()

app.use(cors())
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)

const apiKey = process.env.API_KEY

console.log(`api-key ${apiKey}`)

const port = 8000

app.listen(port, () => console.log(`listening on port ${port}`))


app.get('/', (_, res) => {
    res.sendFile('dist/index.html')
})

app.get('/api/key', (_, res) => res.send({
    key: apiKey
}))