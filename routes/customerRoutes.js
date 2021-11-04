const router = require('express').Router()

const Customer = require('../models/Customer')


//API routes


//Create customer
router.post('/new', async (req, res) => {

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

//List all customers
})

router.get('/list', async (req, res) => {
    try {
        const customers = await Customer.find()

        res.status(200).json(customers)
        
    } catch (error) {
        res.status(500).json({error: error})
        
    }
})


module.exports = router