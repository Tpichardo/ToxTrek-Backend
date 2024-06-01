const express = require("express");

const app = express();

app.get("/", (request, response) => {
	response.status(200).json({ data: "Service is Running" });
});

module.exports = app;
