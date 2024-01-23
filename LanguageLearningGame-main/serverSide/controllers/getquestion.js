import mongoose from "mongoose";
import { Question } from "../models/questionSchema.js";

export const allquestion = async (req, res) => {
    try {
        const ques = await Question.find();
        if (!ques) {
            console.log("empty");
        }
        res.status(200).json({ ques }); // Fix the variable name here
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const english = async (req, res) => {
    try {
        const ques = await Question.find({ "language": "English" })
        if (!ques) {
            console.log("empty");
        }
        res.status(200).json({ ques }) //english question
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });

    }
}

export const Marathi = async (req, res) => {
    try {
        const ques = await Question.find({ "language": "Marathi" })
        if (!ques) {
            console.log("empty");
        }
        res.status(200).json({ ques }) //english question
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });

    }
}

export const Hindi = async (req, res) => {
    try {
        const ques = await Question.find({ "language": "Hindi" })
        if (!ques) {
            console.log("empty");
        }
        res.status(200).json({ ques }) //english question
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });

    }
}