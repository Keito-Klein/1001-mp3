/* NPM init */
const yt = require("yt-converter");
const fs = require("fs");

/* Fetching audio/source information */
// letarray = []
const getInfo = (url) => {
	yt.getInfo(url).then(info => {
		return{
			tittle: info.title,
			channel: info.author.name,
			verif: info.author.verified,
			length: info.lengthSeconds/60,
			thumb: info.thumbnails[1]
		}
	})
}
/* Function */
const getAudio = async (url) => {
const tittle = await yt.getInfo(url).then(info => info.title)
	await yt.convertAudio({
	    url,
	    itag: 140,
	    directoryDownload: '../tmp/',
	    title
	},onData = (percentage, size) => {
		console.log(Math.round(percentage)+" : "+size.totalSize  );
	}, onClose = (exit) => {
		if(exit) {
			console.log(exit);
		}
	});
}

module.exports = {getAudio, getInfo}


