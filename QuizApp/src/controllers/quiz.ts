
import { NextFunction, Request, Response } from "express";

import ProjectError from "../helper/error";
import Quiz from "../models/quiz";

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | []
}


const createQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const created_by = req.userId;
        const name = req.body.name;
        const questions_list = req.body.questions_list;
        const answer = req.body.answer;

        const quiz = new Quiz({ name, questions_list, answer, created_by });
        const result = await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz Created Succesfully", data: { quizId: result._id } };
        res.status(201).send(resp);
    }
    catch (error) {
        next(error)
    }
}

const getQuiz = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId, { name: 1, questions_list: 1, answer: 1, created_by: 1 });
        if (!quiz) {
            const err = new ProjectError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }
        if (req.userId != quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized");
            err.statusCode = 403;
            throw err;
        }
        const resp: ReturnResponse = { status: "success", message: "Quiz ", data: { quiz } };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

const updateQuiz = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const quizId = req.body._id;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId != quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized");
            err.statusCode = 403;
            throw err;
        }

        quiz.name = req.body.name;
        quiz.questions_list = req.body.questions_list;
        quiz.answer = req.body.answer;
        await quiz.save();

        const resp: ReturnResponse = { status: "success", message: "Quiz Updated successfully", data: {} };
        res.status(200).send(resp);

    }
    catch (error) {
        next(error);
    }
}

const deleteQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.params.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new ProjectError("Quiz Not Found!");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId != quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized");
            err.statusCode = 403;
            throw err;
        }

        await Quiz.deleteOne({ _id: quizId });
        const resp: ReturnResponse = { status: "success", message: "Quiz Deleted successfully", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

const publishQuiz = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const quizId = req.body.quizId;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) {
            const err = new ProjectError("Quiz not found");
            err.statusCode = 404;
            throw err;
        }

        if (req.userId != quiz.created_by.toString()) {
            const err = new ProjectError("You are not authorized");
            err.statusCode = 403;
            throw err;
        }

        quiz.is_published = true;

        await quiz.save();
        const resp: ReturnResponse = { status: "success", message: "Quiz Published ", data: {} };
        res.status(200).send(resp);
    }
    catch (error) {
        next(error);
    }
}

export { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz }