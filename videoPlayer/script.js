const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
//PLAY AND PAUSE VIDEO
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// UPDATE PLAY AND PAUSE BUTTON
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}
// STOP VIDEO

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// UPDATE PROGRESS AND TIMESTAMP
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// SET VIDEO TIME TO PROGRESS
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

// Event listeners
video.addEventListener("click", toggleVideoStatus);
play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("change", setVideoProgress);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
