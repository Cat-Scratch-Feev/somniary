// Main Animation for incoming easings
const animation = anime.timeline({
  autoplay: false,
});

animation.add({
  targets: "#start",
  top: "2500px",
  duration: 1250,
  easing: "easeInOutCirc",
});

animation.add({
  targets: "#audio_player",
  top: "0px",
  duration: 1500,
  easing: "easeInOutSine",
});

animation.add({
  targets: "#stars",
  top: "0px",
  duration: 2000,
  easing: "easeInOutSine",
});

animation.add({
  targets: "#moon",
  top: "0px",
  duration: 1500,
  easing: "easeInOutSine",
});

animation.add({
  targets: "#trees",
  bottom: "0px",
  duration: 2000,
  easing: "easeInOutSine",
});

animation.add({
  targets: "#btn",
  bottom: "0px",
  duration: 1000,
  easing: "easeInOutSine",
});

animation.add({
  targets: "#stars",
  rotate: "360deg",
  loop: 1000,
  duration: 100000,
  easing: "linear",
});

//Start button to begin animations/music
const start = document.getElementById("start");
start.addEventListener("click", () => {
  animation.play();
  audio.play();
});

// Main login redirect
const enter = document.getElementById("btn");
btn.addEventListener("click", () => {
  window.location.href = "/login";
});

// Audio player
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play");
  const pauseBtn = document.getElementById("pause");
  const volumeRange = document.getElementById("volume_range");

  // Play button
  playBtn.addEventListener("click", function () {
    audio.play();
  });

  // Pause button
  pauseBtn.addEventListener("click", function () {
    audio.pause();
  });

  // Volume slider
  volumeRange.addEventListener("input", function () {
    audio.volume = volumeRange.value;
  });
});
