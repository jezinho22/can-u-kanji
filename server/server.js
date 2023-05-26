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

// test endpoint - gets just one kanji - all properties
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
});

// already re-factored to library - responds to user request
app.get("/kanji/:grade", APIGetByGrade);

// endpoint for getting a user's saved kanji
app.get("/mykanji", async (request, response) => {
    console.log(request.query);
    const users = await User.find(request.query);
    console.log(users[0]);
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

// handles "delete" from front end
app.put("/mykanji/:id", async (request, response) => {
    try{
    const updated = await User.findByIdAndUpdate(request.params.id, request.body)
    response.json(updated)
    }catch(error){
        console.log(error)
        response.json(error)
    }
})

app.listen(PORT, () => console.log("App listening on PAUGHT " + PORT));
