import express from "express";
import User from "../models/login.js";

export const playerscore = async (req, res) => {
    try {
        const email = req.body.email;
        const record = await User.findOne({ email: email });
        console.log(email);
        if (!record) {
            return res.status(404).json({ "error": "User not found" }); // Return here to prevent further execution
        }

        return res.status(200).json({ record });
    } catch (error) {
        return res.status(500).json({ "error": error }); // Return here to prevent further execution
    }
};
