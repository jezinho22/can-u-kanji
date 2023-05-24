"use strict";
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
const APIGetByGrade = require("./library/APIGetByGrade");
require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8077;
const User = require("./models/usermodel");
const bp = require("body-parser");
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
    response.json("Welcome to the root!");
});

//see readme for api info
app.get("/kanji", async (request, response) => {
    const options = {
        method: "GET",
        // url: "https://kanjialive-api.p.rapidapi.com/api/public/kanji/all",
        url: "https://kanjialive-api.p.rapidapi.com/api/public/kanji/宇",

        params: {},
        headers: {
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
            "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
        },
    };

    try {
        const res = await axios.request(options);
        response.json(res.data);
    } catch (error) {
        console.error(error);
    }
    // response.json("Hi. You have reached Kanjis. How can I help?");
});

app.get("/kanji/:grade", APIGetByGrade);

app.get("/mykanji", async (request, response) => {
    console.log("anything");
    const users = await User.find(request.query);
    response.json(users[0]);
});

app.post("/kanji", async (request, response) => {
    console.log(request.body);
    try {
        const newUser = await User.create(request.body);
        response.json(newUser);
    } catch (error) {
        console.log(error);
        response.json(error);
    }
});

app.listen(PORT, () => console.log("App listening on PAUGHT " + PORT));
