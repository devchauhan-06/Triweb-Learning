import { Request, Response } from 'express';

import { addUserToDb, updateUserData } from '../models/user';

const registerUser = (req: Request, res: Response) => {

    //fetch data from req
    //validation
    //normalise

    const username: string = "Dev";
    const password: string = "password";
    const age = 19;

    const result = addUserToDb(username, password, age)

    res.send(result);
    //task and code
}

const updateUser = (req: Request, res: Response) => {

    const myUser = {
        id: 1,
        uname: "Dev",
        password: "password",
        age: 19
    }
    const result = updateUserData(myUser);
    res.send(result);
}

export { registerUser, updateUser }