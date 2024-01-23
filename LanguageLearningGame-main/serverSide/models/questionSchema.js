import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    language: {
        type: String,
        default: "English"
    },
    question: String,
    level: {
        type: String,
        enum: ["easy", "medium", "hard"]
    },
    option: [String],
    correct: {
        type: Number,
        min: 0,
        max: 3
    }
});


export const Question = mongoose.model('Question', questionSchema);

