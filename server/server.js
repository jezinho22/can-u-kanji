const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

app.get("/", (request, response) => {
	response.json("Welcome to the root!");
});
app.get("/kanjis", (request, response) => {
	response.json("Hi. You have reached Kanjis. How can I help?");
});
// code from rapidapi to get data from API - not quite working
async function getAPI() {
	const options = {
		method: "GET",
		url: "https://kanjialive-api.p.rapidapi.com/api/public/kanji/%E8%A8%AA",
		headers: {
			"X-RapidAPI-Key": "db5eeaf343msh1a63a5c2feec823p1ae435jsn1ba325299f3d",
			"X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
		},
	};

	try {
		const res = await axios.request(options);
		return res.data;
	} catch (error) {
		console.error(error);
	}
}

app.listen(PORT, () => console.log("App listening on PAUGHT " + PORT));
