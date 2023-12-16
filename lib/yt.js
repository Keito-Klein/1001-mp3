/* NPM init */
const yt = require("yt-converter");
const fs = require("fs");

/* Fetching audio/source information */
// let array = []
const url = "https://www.youtube.com/watch?v=T3bxbVGWy5k&list=RDXGFAogohJnM&index=3"
const title = yt.getInfo(url).then(info => info.title);
const info = yt.getInfo(url).then(info => {
	return{
		tittle: info.title,
		channel: info.author.name,
		verif: info.author.verified,
		length: info.lengthSeconds/60,
		thumb: info.thumbnails[1]
	}
})

/* Function */
yt.convertAudio({
    url,
    itag: 140,
    directoryDownload: './out/',
    title
},onData = (percentage, size) => {
	if (size.totalSize >= 16000000) return console.log("File is to Large!");
	console.log(Math.round(percentage)+" : "+size.totalSize  );
}, onClose = (exit) => {
	if(exit) {
		console.log(info);
	}
});


