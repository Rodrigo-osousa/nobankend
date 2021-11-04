//Initial Settings
const express = require ('express')
const mongoose = require('mongoose')
const app = express()

//Way of reading Json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//Routs

const customerRoutes = require('./routes/customerRoutes')

app.use('/customer', customerRoutes)

//Port
const DB_USER = 'admin'
const DB_PASSWORD = encodeURIComponent('LrnsPlTZC26beB28')

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.jqfwa.mongodb.net/nobankend-db?retryWrites=true&w=majority`,
)
.then(() => {
    console.log("MongoDB Connected!")   
    app.listen(3000)
})
.catch((err) => console.log(err))

