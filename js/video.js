var video;

function getVid(){
	video = document.querySelector("#myVideo");
	video.load();
}

function playVid() {
	video.play();
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	video = document.getElementById("myVideo");
	video.playbackRate = video.playbackRate*0.8;
	console.log("Speed is " + video.playbackRate);
}

function increaseSpeed() {
	video = document.getElementById("myVideo");
	video.playbackRate = video.playbackRate*1.25;
	console.log("Speed is " + video.playbackRate);
}

function skipAhead() {
	if (video.ended){
		video.currentTime = 0;
		console.log("Current location is " + video.currentTime);
	}
	else {
		video.currentTime+= 60;
	}
	console.log("Current location is " + video.currentTime);
}

function mute() {
	if (video.muted){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("Unmuted");
		}
	else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		console.log("Muted");
		}
}

function changeVolume() {
	video.volume = volumeSlider.value/100;
	document.getElementById("volume").innerHTML = volumeSlider.value + "%";
	console.log("Volume is " + volumeSlider.value);
}

function gray() {
	video.classList.add("grayscale");
	console.log("In grayscale");
}

function color() {
	video.classList.remove("grayscale");
	console.log("In color");
}
