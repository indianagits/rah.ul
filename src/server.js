const express = require('express')

const app = express()

app.listen(8081, () => {
    console.log('Server started on http://localhost:8081')
})

app.get('/', (req, res) => {
    res.send('Hello Rahul')
})