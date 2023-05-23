const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const User = require("./models/usermodel");

async function seed() {
    await User.create(
        {
            email: "someone@somewhere",
            mykanji: [{ character: "x", meaning: "xx" }],
        },
        { 
            email: "someoneelse@differentplace", 
            mykanji: [{ character: "y", meaning: "yy" }] }
    );
    mongoose.disconnect();
}

seed();
