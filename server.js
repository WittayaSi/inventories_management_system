const express = require('express')
const cors = require('cors')
// const Pusher = require('pusher')
// const bodyParser = require('body-parser')

const app = express()
app.use(cors())

const port = process.env.PORT || 3001

// //initialize Pusher with your appId, key, secret and cluster
// const pusher = new Pusher({
//     appId: 'APP_ID',
//     key: 'APP_KEY',
//     secret: 'APP_SECRET',
//     cluster: 'YOUR_CLUSTER',
//     encrypted: true
// })

// Body parser middleware
app.use(express.json())

// Body parser middleware
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// // CORS middleware
// app.use((req, res, next) => {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true)
//     // Pass to next layer of middleware
//     next()
// })

require('./connection')

app.get('/', (req, res) => {
    res.send('This site is api not website!')
})

// use router
app.use('/api/users', require('./routes/api/users'))
app.use('/api/items', require('./routes/api/items'))
app.use('/api/categories', require('./routes/api/categories'))
app.use('/api/offices', require('./routes/api/offices'))
app.use('/api/departments', require('./routes/api/departments'))

app.listen(port, (err) => {
    if(err) throw err
    console.log(`Server is running on ${port}`)
})