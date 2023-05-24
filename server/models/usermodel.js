const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    mykanji: [
        {
            character: { type: String, required: false },
            video: { type: String, required: false },
            grade: { type: Number, required: false },
            meaning: { type: String, required: false },
            kunyomi: { type: String, required: false },
            romaji1: { type: String, required: false },
            onyomi: { type: String, required: false },
            romaji2: { type: String, required: false },
            hint: { type: String, required: false },
        },
    ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
