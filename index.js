require('dotenv').config();
const express= require('express') 
const cors= require('cors') 
const mongoose = require('mongoose')

const app= express() 


app.use(cors()) 
app.use(express.json());




const mongoString = process.env.DATABASE

mongoose.connect(mongoString).then(()=>{
    console.log('database connected')
}).catch(e=> console.log(e));
mongoose.connection.on('error' , (e)=>{
    console.log(e)
})


app.use('/api', require('./routes/uploadRoute'))

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})

