import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"
import 'dotenv/config'

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
//below added from https://stackoverflow.com/a/66564502/13681680
app.use(express.urlencoded());  // To parse URL-encoded bodies
app.use(express.json()); //To parse JSON body
app.use(todoRoutes)

const uri: string = `mongodb+srv://cluster0.fkwx6.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = { user: process.env.MONGO_USR, pass: process.env.MONGO_PASSWD, useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () => 
        console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch(error => {
        throw error
    })