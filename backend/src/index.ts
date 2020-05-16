import express from 'express'

const app = express()

app.get('/', (req, res) => res.json({message: 'Hello World'}))

app.listen(3000, () => console.log(`listening on port ${3000}`))