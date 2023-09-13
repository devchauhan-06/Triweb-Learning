//Connect to database
import mongoose from "mongoose";

//schema 
const schema = mongoose.Schema;
const reportSchema = new schema(
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
const Report = mongoose.model("Report", reportSchema);


export default Report;