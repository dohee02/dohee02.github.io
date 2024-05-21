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
  Mood.bgColor = "rgb(255, 240, 105)";
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

var isTimerSet = false;
var timeRange = 0;

const playPauseButton = document.querySelector("#play-pause-btn");
const myMusic = document.querySelector("#music-audio");

function moodChange() {
  document.querySelector("body").style.backgroundColor = Mood.bgColor;
  setTimerColor(timeRange);
}

function showAudioControl() {
  document.querySelector(".audio-control").style.display = "flex";
}

const t1Button = document.querySelector("#t1-button");
const t2Button = document.querySelector("#t2-button");
const t3Button = document.querySelector("#t3-button");
const t4Button = document.querySelector("#t4-button");
const t5Button = document.querySelector("#t5-button");
const t6Button = document.querySelector("#t6-button");
const t7Button = document.querySelector("#t7-button");
const t8Button = document.querySelector("#t8-button");
const t9Button = document.querySelector("#t9-button");
const t10Button = document.querySelector("#t10-button");
const t11Button = document.querySelector("#t11-button");
const t12Button = document.querySelector("#t12-button");

var tBtnArr = [
  t1Button,
  t2Button,
  t3Button,
  t4Button,
  t5Button,
  t6Button,
  t7Button,
  t8Button,
  t9Button,
  t10Button,
  t11Button,
  t12Button,
];
// var tSetFuncArr = [setTimer5, set]

t1Button.addEventListener("click", setTimer5);
t2Button.addEventListener("click", setTimer10);
t3Button.addEventListener("click", setTimer15);
t4Button.addEventListener("click", setTimer20);
t5Button.addEventListener("click", setTimer25);
t6Button.addEventListener("click", setTimer30);
t7Button.addEventListener("click", setTimer35);
t8Button.addEventListener("click", setTimer40);
t9Button.addEventListener("click", setTimer45);
t10Button.addEventListener("click", setTimer50);
t11Button.addEventListener("click", setTimer55);
t12Button.addEventListener("click", setTimer60);

function setTimerColor(timeRange) {
  for (var i = 0; i < 12; i++) {
    if (i < timeRange / 5) {
      tBtnArr[i].style.backgroundColor = Mood.btnColor;
    } else {
      tBtnArr[i].style.backgroundColor = "lightgray";
    }
  }
  if (timeRange != 0) {
    playPauseButton.style.backgroundColor = Mood.btnColor;
  }
}

function setTimer5() {
  timeRange = 5;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer10() {
  timeRange = 10;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer15() {
  timeRange = 15;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer20() {
  timeRange = 20;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer25() {
  timeRange = 25;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer30() {
  timeRange = 30;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer35() {
  timeRange = 35;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer40() {
  timeRange = 40;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer45() {
  timeRange = 45;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer50() {
  timeRange = 50;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer55() {
  timeRange = 55;
  isTimerSet = true;
  setTimerColor(timeRange);
}
function setTimer60() {
  timeRange = 60;
  isTimerSet = true;
  setTimerColor(timeRange);
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
