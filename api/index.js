import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import Moralis from "moralis"
import moralisRouter from "./routes/moralis.route.js"



const app = express()
const port = 3000
dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/api/v1', moralisRouter)



Moralis.start({
    apiKey: process.env.MORALIS_API_KEY
}).then(() => {
    app.listen(port, ()=> console.log('Server is running on port 3000'))
}).catch((err) => console.log(err))

