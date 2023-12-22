//NPM Package
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { jsDOM } = require("jsdom");
const ejs = require("ejs");
const fs = require("fs");
const { getAudio, getInfo } = require("./lib/yt.js");
const app = express()
const port = 3000

//Using Middleware
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}))



//get Root address
app.get('/', (req, res) => {
	res.render("main",
		{ title: "1001-mp3",
		  layout: "layout/main-layout"
		});
})

//Catch request from user
app.post('/', (req, res) => {
	const inputData = req.body.link
	getAudio(inputData.trim())
})

//Catch Page not Found
app.use('/', (req, res) => {
	res.status(404)
	res.send('<h1> 404 </h1>')
})


app.listen(port, () => {
 console.log("System Uptime!");
})