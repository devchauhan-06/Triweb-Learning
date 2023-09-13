//Connect to database
import mongoose, { Mongoose } from "mongoose";

//schema 
const schema = mongoose.Schema;
const quizSchema = new schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        questions_list: [
            {
                question_number: {
                    type: Number
                },
                question: String,
                options: {

                }
            }
        ],

        answer: {},

        created_by: {
            type: mongoose.Types.ObjectId,
            required: true
        },

        is_published: {
            type: Boolean,
            default: false
        }

    },
    { timestamps: true },

);


//model
const Quiz = mongoose.model("Quiz", quizSchema);


export default Quiz