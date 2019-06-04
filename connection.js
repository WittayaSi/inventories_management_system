const mongoose = require('mongoose')
const config = require('config')

const mongodb = config.get('localMongodbURI')

mongoose
    .connect(mongodb, {
        useNewUrlParser: true,
        useCreateIndex: true
    })

mongoose
    .connection
    .on('connected', ()=>{
        console.log('Mongoose default connection open');
    })

mongoose
    .connection
    .on('error', (err) => {
        console.log(`Mongoose default connection error: ${err}`)
    })

mongoose
    .connection
    .on('disconnected', () => {
        console.log('Mongoose default connction disconnected');
    })

process.on('SIGINT', () => {
    mongoose
        .connection
        .close(() => {
            console.log('Mongoose default connction disconnected through app termination')
            process.exit(0)
        })
})