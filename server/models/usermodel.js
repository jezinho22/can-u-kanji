const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    mykanji: [
        {
            character: { type: String, required: false },
            videoMp4: { type: String, required: false },
            videoWebm: { type: String, required: false },
            playVideo:{type: Boolean},
            grade: { type: Number, required: false },
            meaning: { type: String, required: false },
            kunyomi: { type: String, required: false },
            romaji1: { type: String, required: false },
            onyomi: { type: String, required: false },
            romaji2: { type: String, required: false },
            hint: { type: String, required: false },
            rating: { type: String, required: false },
        },
    ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
