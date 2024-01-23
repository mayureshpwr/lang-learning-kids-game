import { Question } from "../models/questionSchema.js";

export const addquestion = async (req, res) => {
    try {
        // Assuming the question text is a unique identifier
        const existingQuestion = await Question.findOne({ question: req.body.question });

        if (existingQuestion) {
            // Question already exists
            res.status(409).json({ message: 'Question already exists' });
        } else {
            // Create and save the new question
            const newQuestion = new Question(req.body);
            const savedQuestion = await newQuestion.save();
            res.status(200).json({ question: savedQuestion });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
