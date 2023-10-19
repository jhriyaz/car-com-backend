const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');



const port=process.env.PORT ||5000
const app = express()
//middleware here
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ne92jzz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const cars = client.db("CarCom").collection("cars");
    
  app.post('/cars',async(req,res)=>{
    let car=req.body
    const result = await myColl.insertOne(car);
   res.send(result);
  })






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  
  }
}
run().catch(console.dir);




app.get('/',(req,res)=>{
    res.send('welcome to Car-com')
})

app.listen(port,()=>{
    console.log('listening on port',port)
})