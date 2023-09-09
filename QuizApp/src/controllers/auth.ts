
import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

import User from "../models/user";
import ProjectError from "../helper/error";

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | []
}


const registerUser = async (req: Request, res: Response, next: NextFunction) => {

    let resp: ReturnResponse;

    try {

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

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
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


export { registerUser, loginUser }