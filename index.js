const express = require('express')
const mongoose = require('mongoose')
const app = express()
const student = require('./students')
const db = require('./db')

app.use(express.json())

app.post('/students',async(req,res)=>{
    const data = req.body
    const object = await student.create(data)
    res.json({"message":"succesfully created",object})
})

app.listen(9000,()=>{
    console.log("server is open")
})