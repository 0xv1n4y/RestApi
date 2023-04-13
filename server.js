const  express = require('express')
const app = express()

const port = 3000
require("dotenv").config()

//database connection
const mongoose=require("mongoose")
mongoose.connect(process.env.MONGO_URL,)
const db =mongoose.connection
db.on('error',(error)=>console.log(error))
db.once("open",()=>console.log("connected TO database"))

app.use(express.json())

//Routes
const subscriberRoutes=require("./routes/subscribers")

app.use("/subscribers",subscriberRoutes)








app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`server is Running ${port}!`))