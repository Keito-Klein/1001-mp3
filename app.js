const express = require("express");
const app = express()
const port = 3000

//Using View Engine ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render("root", { title: "1001-mp3" });
})

app.listen(port, () => {
 console.log("System Uptime!")
})