// Redirect request to particular controller
import express from 'express'
import { registerUser, loginUser } from '../controllers/auth'
import { body } from 'express-validator';
import { isUserExists } from '../controllers/auth';


const router = express.Router()

// Post /auth/
router.post('/', [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 4 })
        .withMessage("Please enter a valid name,minimum 4 character long"),

    body('email')
        .trim()
        .isEmail()
        .custom((emailId: String) => {
            return isUserExists(emailId)
                .then((status: Boolean) => {
                    if (status) {
                        return Promise.reject("User Already Exists");
                    }

                })
                .catch((err) => {
                    return Promise.reject(err);
                })
        })
        .normalizeEmail(),
    body('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage("Enter at least 8 character long password"),
    body('confirm_password')
        .trim()
        .custom((value: String, { req }) => {
            if (value != req.body.password) {
                return Promise.reject("Password mismatch");
            }
            return true;
        })

], registerUser);

// Post /auth/login
router.post('/login', loginUser);

export default router