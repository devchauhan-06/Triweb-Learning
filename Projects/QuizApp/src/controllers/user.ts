// Send/Recieve data from database via model

import { Request, Response, NextFunction } from "express";

import User from "../models/user";
import ProjectError from "../helper/error";

import { ReturnResponse } from "../utils/interfaces";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;

        if (req.userId != req.params.userId) {
            const err = new ProjectError("You are not Authorized!");
            err.statusCode = 401;
            throw err;
        }
        const user = await User.findById(userId, { name: 1, email: 1 })
        if (!user) {
            const err = new ProjectError("User does not exist")
            err.statusCode = 401;
            throw err;
        }
        else {
            resp = {
                status: "success",
                message: "User Found",
                data: { user }
            };
            res.status(200).send(resp);
        }
    } catch (error) {
        next(error);
    }

}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    try {

        if (req.userId != req.body._id) {
            const err = new ProjectError("You are not Authorized!");
            err.statusCode = 401;
            throw err;
        }

        const userId = req.body._id;
        const user = await User.findById(userId)

        if (!user) {
            const err = new ProjectError("User does not exist")
            err.statusCode = 401;
            throw err;
        }

        user.name = req.body.name;
        await user.save();
        resp = {
            status: "success",
            message: "User Updated",
            data: {}
        };
        res.send(resp);
    }
    catch (error) {
        next(error);
    }
}


export { getUser, updateUser }



