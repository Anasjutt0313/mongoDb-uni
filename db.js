const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/students')
.then(()=>console.log('mongoDb is connected'))
.catch((err)=>console.log(err))

module.exports=mongoose