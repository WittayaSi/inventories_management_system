const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = process.env.PORT || 3001

// Body parser middleware
app.use(express.json())

require('./connection')

app.get('/', (req, res) => {
    res.send('This site is api not website!')
})

// use router
app.use('/api/users', require('./routes/api/users'))
app.use('/api/items', require('./routes/api/items'))
app.use('/api/categories', require('./routes/api/categories'))

app.listen(port, (err) => {
    if(err) throw err
    console.log(`Server is running on ${port}`)
})