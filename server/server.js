const express = require("express");
const cors = require("cors");
const axios = require("axios");
const APIGetByGrade = require("./library/APIGetByGrade");
require("dotenv").config();

const PORT = process.env.PORT || 8076;

const app = express();
app.use(cors());

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

app.listen(PORT, () => console.log("App listening on PAUGHT " + PORT));
