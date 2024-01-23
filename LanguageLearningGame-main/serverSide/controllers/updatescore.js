import User from '../models/login.js';
export const updateScoreByEmail = async (req, res) => {
    try {
        const { email, score } = req.body;
        console.log(req.body);
        // Validation: Check if email and newScore are present in the request body
        if (!email || !score) {
            return res.status(400).json({ error: 'Email and newScore are required in the request body.' });
        }

        const filter = { email: email };
        const update = { score: score };

        const updatedUser = await User.findOneAndUpdate(filter, update, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ error: `User with email ${email} not found.` });
        }

        return res.json({ message: `Score updated for user with email ${email}. New score: ${updatedUser.score}` });
    } catch (error) {
        console.error('Error updating score:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
