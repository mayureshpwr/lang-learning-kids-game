import User from "../models/login.js";

export const allplayers = async (req, res) => {
    try {
        const players = await User.find().sort({ score: -1 }); // Sort by score in descending order

        if (!players || players.length === 0) {
            return res.status(404).json({ error: "No records found" });
        }

        return res.status(200).json({ players });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};
