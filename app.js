require('dotenv').config()

const express=require('express')
const app=express()

//morgan
const morgan=require('morgan')
const bodyParser=require('body-parser')
const mongoose = require('mongoose')

const username = process.env.dbuser
const password = process.env.dbpassword

const connectionString ="mongodb+srv://user1:User123@e-commercecluster.grfxx5z.mongodb.net/EcommDB"

mongoose.connect(connectionString)

// const productRouter=require('./api/routes/products')
// const orderRouter=require('./api/routes/order')

app.use(morgan("dev"))//dev is one of the predefined formats for the morgan
// app.use('/products',productRouter)
// app.use('/order',orderRouter)
app.use(require('./route.js'));
module.exports = app

