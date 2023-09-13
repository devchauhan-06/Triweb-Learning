import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import ProjectError from "../helper/error";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    try {
        //header -> token
        const authHeader = req.get('Authorization');

        if (!authHeader) {
            const err = new ProjectError("Not Authenticated")
            err.statusCode = 401;
            throw err;
        }

        const token = authHeader.split(' ')[1];

        //jwt -> decode using secret key  "myVerySecretkey"
        let decodedToken: { userId: String, iat: Number, exp: Number };

        try {
            decodedToken = <any>jwt.verify(token, "myVerySecretkey");

        }
        catch (error) {
            const err = new ProjectError("Not Authenticated")
            err.statusCode = 401;
            throw err;
        }


        if (!decodedToken) {
            const err = new ProjectError("Not Authenticated")
            err.statusCode = 401;
            throw err;
        }
        //userId
        req.userId = decodedToken.userId

        next();
    }
    catch (error) {
        next(error);
    }
}

export { isAuthenticated };