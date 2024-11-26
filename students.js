const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const studentSchema = new Schema({
    name:String,
    id:Number,
    age:Number
})

const student = mongoose.model('student',studentSchema)

module.exports = student