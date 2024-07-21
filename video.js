const videoPlayer = document.querySelector(".video-player");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");

// Play and Pause button
playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "⏸";
    // video.requestFullscreen();
  } else {
    video.pause();
    e.target.textContent = "▶";
  }
});

// ▶ ⏯ ⏹ ⏸
// videoPlayer.style.height = "100vh";
