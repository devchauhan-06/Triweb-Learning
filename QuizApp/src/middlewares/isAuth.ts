import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {


    //header -> token
    const authHeader = req.get('Authorization');

    if (!authHeader) {
        const err = new Error("Not Authenticated");

        throw err;
        // res.status(401).send("Not Authenticate");
    }

    const token = authHeader.split(' ')[1];

    //jwt -> decode using secret key  "myVerySecretkey"
    let decodedToken: { userId: String, iat: Number, exp: Number };

    try {
        decodedToken = <any>jwt.verify(token, "myVerySecretkey");

    }
    catch (error) {
        const err = new Error("Not Authenticated");
        throw err;
    }


    if (!decodedToken) {
        throw new Error("Not Authenticated");
    }
    //userId
    req.userId = decodedToken.userId

    next();
}

export { isAuthenticated };