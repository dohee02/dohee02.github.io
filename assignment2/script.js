const Mood = {
  bgColor: "lemonchiffon",
  btnColor: "lemonchiffon",
  musicSpeed: 1,
  musicVolume: 1,
};

const m1Button = document.querySelector("#m1-button");
m1Button.addEventListener("click", changeMoodTo1);

const m2Button = document.querySelector("#m2-button");
m2Button.addEventListener("click", changeMoodTo2);

const m3Button = document.querySelector("#m3-button");
m3Button.addEventListener("click", changeMoodTo3);

const m4Button = document.querySelector("#m4-button");
m4Button.addEventListener("click", changeMoodTo4);

function changeMoodTo1() {
  Mood.bgColor = "rgb(255, 167, 120)";
  Mood.btnColor = "rgb(245, 117, 70)";
  Mood.musicSpeed = 1.8;
  Mood.musicVolume = 2;
  moodChange();
  showAudioControl();
}

function changeMoodTo2() {
  Mood.bgColor = "rgb(255, 220, 85)";
  Mood.btnColor = "rgb(243, 170, 35)";
  Mood.musicSpeed = 1.25;
  Mood.musicVolume = 1;
  moodChange();
  showAudioControl();
}

function changeMoodTo3() {
  Mood.bgColor = "rgb(204, 255, 100)";
  Mood.btnColor = "rgb(154, 205, 50)";
  Mood.musicSpeed = 0.9;
  Mood.musicVolume = 0.8;
  moodChange();
  showAudioControl();
}

function changeMoodTo4() {
  Mood.bgColor = "rgb(117, 214, 117)";
  Mood.btnColor = "rgb(67, 164, 67)";
  Mood.musicSpeed = 0.75;
  Mood.musicVolume = 0.5;
  moodChange();
  showAudioControl();
}

const playPauseButton = document.querySelector("#play-pause-btn");
const myMusic = document.querySelector("#music-audio");

function moodChange() {
  document.querySelector("body").style.backgroundColor = Mood.bgColor;
  playPauseButton.style.backgroundColor = Mood.btnColor;
}

function showAudioControl() {
  document.querySelector(".audio-control").style.display = "flex";
}

playPauseButton.addEventListener("click", playPauseMusic);

function playPauseMusic() {
  if (myMusic.paused) {
    myMusic.pause();
    // playPauseButton.innerHTML = "Play";
  } else {
    myMusic.play();
    // playPauseButton.innerHTML = "Pause";
  }
  myMusic.play();
}
