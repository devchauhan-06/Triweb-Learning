import express, { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';

import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from '../controllers/quiz'
import { isAuthenticated } from '../middlewares/isAuth';

const router = express.Router();

//CREATE 

// POST /quiz/
router.post('/', isAuthenticated, [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({ min: 10 })
        .withMessage("Please enter a valid name,minimum 10 character long"),
    body('questions_list')
        .custom(questions_list => {
            if (questions_list.length == 0) {
                return Promise.reject("Question List cannot be Empty!")
            }
            return true;
        }),
    body('answer')
        .custom(answer => {
            if (Object.keys(answer).length == 0) {
                return Promise.reject("Enter at least One Answer!")
            }
            return true;
        })
], createQuiz);


//GET

// GET /quiz/:quizId
router.get('/:quizId', isAuthenticated, getQuiz);


//UPDATE

//PUT /quiz 
router.put('/', isAuthenticated, [body('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("Please enter a valid name,minimum 10 character long"),
body('questions_list')
    .custom(questions_list => {
        if (questions_list.length == 0) {
            return Promise.reject("Question List cannot be Empty!")
        }
        return true;
    }),
body('answer')
    .custom(answer => {
        if (Object.keys(answer).length == 0) {
            return Promise.reject("Enter at least One Answer!")
        }
        return true;
    })], updateQuiz);


//DELETE

//DELETE /quiz/quizId
router.delete('/:quizId', isAuthenticated, deleteQuiz);


//Publish

//PATCH quiz/publish
router.patch('/publish', isAuthenticated, publishQuiz);


export default router;