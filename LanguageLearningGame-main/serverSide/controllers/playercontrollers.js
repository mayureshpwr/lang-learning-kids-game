import User from "../models/login.js";

export const createplayer = async (req, res) => {
    try {
        const email = req.body.email;
        const userpassword = req.body.password;
        const record = await User.findOne({ email: email });

        if (record) {
            // User exists, check password
            const password = record.password;
            if (req.body.password === password) {
                res.status(200).json({ "msg": "right" });
            } else {
                res.status(200).json({ "msg": "wrong" });
            }
        } else {
            // User doesn't exist, create a new user
            const newplayer = new User(req.body);

            if (!newplayer) {
                res.status(404).json({ msg: "new Player is not added" });
            }

            const savedata = await newplayer.save();
            res.status(200).json({ "msg": "right" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
