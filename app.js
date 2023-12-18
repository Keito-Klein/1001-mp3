const express = require("express");
const expressLayouts = require("express-ejs-layouts")
const app = express()
const port = 3000

//Using View Engine ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));

//get Root address
app.get('/', (req, res) => {
	res.render("main",
		{ title: "1001-mp3",
		  layout: "layout/main-layout"
		});
})


app.use('/', (req, res) => {
	res.status(404)
	res.send('<h1> 404 </h1>')
})

app.listen(port, () => {
 console.log("System Uptime!");
})