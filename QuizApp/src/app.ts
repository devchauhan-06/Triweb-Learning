import express, { Request, Response } from 'express';
import userRoute from './routers/user'
import mongoose from 'mongoose';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();

// const uri = "mongodb+srv://devchauhan62003:<dev@62003>49.36.220.89/32:27017/workshopDB?retryWrites=true&w=majority"
// const uri = "mongodb+srv://devchauhan62003:dev%4062003@mycluster.j2b0hws.mongodb.net/"
const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send("HOME")
})

//Redirect /user to userController 

app.use('/user', userRoute)

// mongoose.connect(connectionString)
//     .then((res) => app.listen(3006))
//     .catch((err) => console.log(err))

async function connectDb() {
    try {
        await mongoose.connect(connectionString);
        app.listen(process.env.PORT, () => {
            console.log("Server is running");
        });
    } catch (error) {
        console.log(error);
    }
}

connectDb();