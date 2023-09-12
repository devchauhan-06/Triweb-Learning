//Connect to database
import mongoose from "mongoose";

//schema 
const schema = mongoose.Schema;
const resultSchema = new schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        quizId: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        score: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        }

    },
    { timestamps: true },

);


//model
const Result = mongoose.model("Result", resultSchema);


export default Result;