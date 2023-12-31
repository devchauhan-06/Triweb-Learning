
import { RequestHandler } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"
import { validationResult } from "express-validator/src/validation-result";

import User from "../models/user";
import ProjectError from "../helper/error";
import { ReturnResponse } from "../utils/interfaces";



//In this File we are using RequestHandler in others we are using Request,Response,NextFunction


// const registerUser = async (req: Request, res: Response, next: NextFunction) =>
const registerUser: RequestHandler = async (req, res, next) => {

    let resp: ReturnResponse;

    try {
        //Validation 

        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            const err = new ProjectError("Validation Failed!");
            err.statusCode = 422;
            err.data = validationError.array();
            throw err;
        }


        const email = req.body.email;
        const name = req.body.name;
        const password = await bcryptjs.hash(req.body.password, 12);
        // const password = req.body.password;

        const user = new User({ email, name, password })
        const result = await user.save();
        if (!result) {
            resp = {
                status: "error",
                message: "No result found",
                data: {}
            };
            res.send(resp)
        }
        else {
            resp = {
                status: "success",
                message: "Registration Done",
                data: { userId: result._id }
            };
            res.send(resp);
        }
    } catch (error) {
        next(error);
    }

}

const loginUser: RequestHandler = async (req, res, next) => {
    let resp: ReturnResponse;
    try {
        const email = req.body.email;
        const password = req.body.password;

        //find user with email 
        const user = await User.findOne({ email })


        //verify password using bcrypt
        if (user) {

            const status = await bcryptjs.compare(password, user.password)

            //Decide
            if (status) {

                const token = jwt.sign({ userId: user._id }, "myVerySecretkey", { expiresIn: '1h' })

                resp = {
                    status: "success",
                    message: "Logged in",
                    data: { token }
                };
                res.status(200).send(resp);
            }
            else {
                const err = new ProjectError("Credentials Mismatched")
                err.statusCode = 401;
                throw err;
            }

        }
        else {
            const err = new ProjectError("User does not exist")
            err.statusCode = 401;
            throw err;
        }

    } catch (error) {

        next(error);
    }


}


const isUserExists = async (email: String) => {
    //find user with email 
    const user = await User.findOne({ email })

    if (!user) {
        return false;
    }
    return true;
}

export { registerUser, loginUser, isUserExists }