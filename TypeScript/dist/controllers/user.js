"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    //fetch data from req
    //validation
    //normalise
    const username = "Dev";
    const password = "password";
    const result = (0, user_1.addUserToDb)(username, password);
    res.send(result);
    //task and code
};
exports.registerUser = registerUser;
