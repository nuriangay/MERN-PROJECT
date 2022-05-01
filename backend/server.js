const express =require('express')
const dotenv=require('dotenv').config()
const connectDB=require('./config/db')

const colors=require('colors')
const port=5000
const app =express()
const {errorHandler}=require('./middleware/error')


//connect to database

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res) =>{
    res.send('hello')
})

//routes
app.use('/api/users',require('./routes/UserRoutes'))
app.use(errorHandler)

app.listen(port,()=>console.log(`hello ${port}`))