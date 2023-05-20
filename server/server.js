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
app.get("/kanjis", async (request, response) => {
	const options = {
		method: "GET",
		url: "https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/",
		params: { grade: "2" },
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
// code from rapidapi to get data from API - not quite working
async function getAPI() {}

app.listen(PORT, () => console.log("App listening on PAUGHT " + PORT));
