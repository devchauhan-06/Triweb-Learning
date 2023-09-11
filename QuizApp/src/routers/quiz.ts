import express, { Request, Response, NextFunction } from 'express';

import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from '../controllers/quiz'
import { isAuthenticated } from '../middlewares/isAuth';

const router = express.Router();

//CREATE 

// POST /quiz/
router.post('/', isAuthenticated, createQuiz);


//GET

// GET /quiz/:quizId
router.get('/:quizId', isAuthenticated, getQuiz);


//UPDATE

//PUT /quiz 
router.put('/', isAuthenticated, updateQuiz);


//DELETE

//DELETE /quiz/quizId
router.delete('/:quizId', isAuthenticated, deleteQuiz);


//Publish

//PATCH quiz/publish
router.patch('/publish', isAuthenticated, publishQuiz);


export default router;