// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
	console.log("server is now running");
	console.log(`running on localhost:${port}`);
}

// GET route, usd to get data from server. 
app.get("/get", getData);
function getData(req, res) {
	res.send(projectData);  
}

// POST route, used to post data to server, server will save to projectData. 
app.post("/post", postData);
function postData(req, res) {
	console.log("saving to local, here is data need to be saved",req.body);
	/*
	projectData['date'] = req.body.date;
	projectData['temp'] = req.body.temp;
	projectData['content'] = req.body.content;*/
	projectData = req.body;
	res.send(projectData);
}