const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv').config()
const port=process.env.PORT ||5000
const app = express()
//middleware here
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('server server')
})
app.listen(port,()=>{
    console.log('listening on port',port)
})