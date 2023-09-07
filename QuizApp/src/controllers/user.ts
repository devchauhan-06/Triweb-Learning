// Send/Recieve data from database via model

import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcryptjs from "bcryptjs";

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {}
}

const registerUser = async (req: Request, res: Response) => {

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
        //console.log(error)
        resp = {
            status: "error",
            message: "Something went wrong",
            data: {}
        };
        res.status(500).send(resp);
    }

}

const loginUser = async (req: Request, res: Response) => {
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
                resp = {
                    status: "success",
                    message: "Logged in",
                    data: {}
                };
                res.status(200).send(resp);
            }
            else {
                resp = {
                    status: "error",
                    message: "Credentials Mismatched",
                    data: {}
                };
                res.status(401).send(resp);
            }

        }
        else {
            resp = {
                status: "error",
                message: "User does not exist",
                data: {}
            };
            res.status(401).send(resp);
        }

    } catch (error) {
        console.log(error)
        resp = {
            status: "error",
            message: "Something went wrong",
            data: {}
        };
        res.status(500).send(resp);
    }


}

const getUser = async (req: Request, res: Response) => {
    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId, { name: 1, email: 1 })
        if (!user) {
            resp = {
                status: "error",
                message: "No User found",
                data: {}
            };
            res.send(resp)
        }
        else {
            resp = {
                status: "success",
                message: "User Found",
                data: { user }
            };
            res.send(resp);
        }
    } catch (error) {
        console.log(error)
        resp = {
            status: "error",
            message: "Something went wrong",
            data: {}
        };
        res.status(500).send(resp);
    }

}


const updateUser = async (req: Request, res: Response) => {
    let resp: ReturnResponse;
    try {
        const userId = req.body._id;
        const user = await User.findById(userId)
        if (user) {
            user.name = req.body.name;
            await user.save();
        }
        resp = {
            status: "success",
            message: "User Updated",
            data: {}
        };
        res.send(resp);
    }
    catch (error) {
        console.log(error)
        resp = {
            status: "error",
            message: "Something went wrong",
            data: {}
        };
        res.status(500).send(resp);
    }
}


export { registerUser, getUser, updateUser, loginUser }



