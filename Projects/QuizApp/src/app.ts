import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import userRoute from './routers/user';
import authRoute from './routers/auth';
import ProjectError from "./helper/error";
import quizRoute from "./routers/quiz";
import examRoute from "./routers/exam";
import reportRoute from "./routers/report";
import { ReturnResponse } from "./utils/interfaces";

const app = express();


const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json())

declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
    }
}

app.get('/', (req: Request, res: Response) => {
    res.send("HOME")
})

//Redirect /user to userRoute

app.use('/user', userRoute);

//Redirect /auth to authRoute

app.use('/auth', authRoute);


//Redirect /quiz 

app.use('/quiz', quizRoute);

//Redirect /exam

app.use('/exam', examRoute);


//Redirect /report

app.use('/report', reportRoute);


//Error Route

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {

    let message: String;
    let statusCode: number;

    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    }
    else {
        message = "Something went wrong please try after sometime!";
        statusCode = 500;
    }

    let resp: ReturnResponse = { status: "error", message, data: {} }

    if (!!err.data) {
        resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
})


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