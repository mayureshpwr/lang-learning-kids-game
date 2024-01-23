import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
});

// Pre-save hook to update the score based on email existence
userSchema.pre('save', async function (next) {
    const existingUser = await mongoose.models.User.findOne({ email: this.email });

    if (existingUser) {
        // If user with the same email exists, set the score to the previous score
        this.score = existingUser.score;
    } else {
        // If user with the same email does not exist, set the score to 0
        this.score = 0;
    }

    next();
});

const User = mongoose.model('User', userSchema);

export default User;
