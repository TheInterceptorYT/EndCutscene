let player;
const videoUrl = "jXJAXAr4EaE"; // YouTube video ID
const imageElement = document.getElementById("endImage");
const lullabyAudio = document.getElementById("lullaby");

// Called automatically by YouTube IFrame API
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: videoUrl,
    playerVars: {
      autoplay: 1,
      controls: 0, // hide controls
      modestbranding: 1,
      rel: 0,
      disablekb: 1, // disable keyboard shortcuts
      fs: 0, // no fullscreen button
      mute: 1, // mute initially for autoplay
    },
    events: {
      onReady: (event) => {
        event.target.playVideo();
        setTimeout(() => event.target.unMute(), 100); // unmute immediately
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.ENDED) {
          document.getElementById("player").style.display = "none"; // hide video
          imageElement.style.display = "block"; // show image
          setTimeout(() => (imageElement.style.opacity = 1), 50); // fade in 15s
          lullabyAudio.play(); // play lullaby
        }
      },
    },
  });
}

// Disable right-click on the video
document.addEventListener("contextmenu", (e) => {
  if (e.target.id === "player") e.preventDefault();
});
