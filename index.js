const express = require("express");
const dotenv=require('dotenv');
const mongoose=require('mongoose')
const cors = require('cors')

const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',require('./routes/routes'))
app.use(cors())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})   
// app.use(cors('http://localhost:3000/register'))
dotenv.config({path:'config.env'})
const DATA=process.env.DATABASE_URL
const PORT=process.env.PORT||8080

app.get('/',(req,res)=>{
    res.json('hello world')
})

mongoose.connect(DATA,{useUnifiedTopology:true,useNewUrlParser:true})
.then((client)=>
{console.log('mongo db connected')})

.catch((error)=>console.error(error))

app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})