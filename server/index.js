const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000

const app = express()

// middleware
const coreOptions = {
    origin: ['http://localhost:5173', "http://localhost:5174"],
    credentials:true,
    optionSuccessStatus:200,
}
app.use(cors(coreOptions))
app.use(express.json())



const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0ksef.mongodb.net/?appName=Cluster0`;

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
    // await client.connect();
    const soloSphere = client.db('soloSphere')
    const jobsCollection = soloSphere.collection('jobs')
    const bidsCollection = soloSphere.collection('bids')

    // get all jobs data from db
    app.get('/jobs', async(req, res) => {
        const result = await jobsCollection.find().toArray()

        res.send(result)
    })

    // get a single data from db using job id
    app.get('/job/:id', async(req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await jobsCollection.findOne(query)

        res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('server is running...')
})


app.listen(port, ()=>{
    console.log(`server is running http://localhost:${port}`)
})
