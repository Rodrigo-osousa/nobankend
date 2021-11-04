//Initial Settings
const express = require ('express')
const mongoose = require('mongoose')
const app = express()

const Customer = require('./models/Customer')

//Way of reading Json / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//API routes

app.post('/customer/new', async (req, res) => {

    //req.Body
    const {name, addres, documentNumber} = req.body

    if(!name) {
        res.status(422).json({ error: 'Name cannot be blank'})
    }

    if(!addres) {
        res.status(422).json({ error: 'Addres cannot be blank'})
    }

    if(!documentNumber) {
        res.status(422).json({ error: 'Document Number cannot be blank'})
    }

    const customer ={
        name,
        addres,
        documentNumber
    }

    try {
        //creating data
        await Customer.create(customer)
        
        res.status(201).json({message: 'Customer created successfully!'})

    } catch (error) {
        res.status(500).json({error: error})
        
    }


})

//Initial route
app.get('/customer/list', (req, res) =>{
    res.json({message: 'Hello Express!'})
})


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

