const express = require('express')
const { db } = require('./models/db')
const redirectionRoute = require('./routes/redirection')
const linksRoute = require('./routes/links')

const app = express()

app.use(express.json())
app.use('/', redirectionRoute)
app.use('/api/links', linksRoute)

app.listen(8081, () => {
    console.log('Server started on http://localhost:8081')
})

db.sync()
    .then(() => console.log('db works'))
    .catch((err) => console.log(err))