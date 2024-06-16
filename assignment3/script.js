const contactButton = document.querySelector("#contact-button");
const contactContent = document.querySelector("#contact-content");

contactButton.addEventListener("click", toggleContact);

function toggleContact() {
  contactContent.classList.toggle("show");
}

let lastKnownScrollPosition = 0;
let ticking = false;
let isFirstScroll = true;

// const body = document.querySelector("body");
const container = document.querySelector("#container");
const scrollText = document.querySelector("#scroll-text");
const welcomeText = document.querySelector("#welcome-text");
// const airplaneAudio = document.querySelector("#airplane-audio");
const airplane = document.querySelector("#airplane");
const cloudBox = document.querySelector("#cloud-box");
const clouds = document.querySelectorAll(".clouds");
const earthBox = document.querySelector("#earth-box");
const seaWaves = document.querySelectorAll(".sea-wave");
const island = document.querySelector("#island2");
const titleBox = document.querySelector("#title-box");

let islandX = 60;
let seawaveX = [70, 15, 45];
let cloudX = [5, 10, 55, 80, 85];
let islandSpeed = 0.35;
let seawaveSpeed = 35;
let cloudSpeed = 1.2;
// let airplaneOutX = 41.67;
// let airplaneUpSize = 400;

// container.backgroundColor = red;

function doSomething(scrollPos) {
  // Do something with the scroll position
  //   let containerBGColor = "rgb(255,255,255)";

  if (scrollPos >= 100) {
    scrollText.innerHTML = parseInt(scrollPos);
    scrollText.style.display = "none";
  } else {
    scrollText.innerHTML = "👇 Scroll down to head to INHA 🛫";
    scrollText.style.display = "flex";
  }

  if (scrollPos < 500) {
    container.style.backgroundColor = `rgb(${255 - (64 * scrollPos) / 500},${255 - (26 * scrollPos) / 500},${
      255 - (9 * scrollPos) / 500
    })`;
    welcomeText.style.top = `${300 - scrollPos / 10}`;
    airplane.style.right = "105%";

    earthBox.style.opacity = 0;
    cloudBox.style.opacity = 0;
  } else {
    // container.style.backgroundColor = "rgb(191,229,246)";
    earthBox.style.bottom = 0;
  }

  if (scrollPos >= 500 && scrollPos < 1800) {
    earthBox.style.bottom = -300 + ((scrollPos - 500) * 3) / 13;
    earthBox.style.opacity = (scrollPos - 500) / 1300;
    cloudBox.style.bottom = -100 + (scrollPos - 500) / 13;
    cloudBox.style.opacity = (scrollPos - 500) / 1300;
  }
  if (scrollPos >= 500 && scrollPos < 2400) {
    airplane.style.right = `${105 - (scrollPos - 500) / 30}%`;
  } else if (scrollPos >= 2400 && scrollPos < 20500) {
    airplane.style.right = "41.67%";
    container.style.backgroundColor = `rgb(${191 - (121 * (scrollPos - 2400)) / 18100},${
      229 - (120 * (scrollPos - 2400)) / 18100
    },${246 - (65 * (scrollPos - 2400)) / 18100})`;
    earthBox.style.opacity = 1;
    cloudBox.style.opacity = 1;
    if (islandX < -5) {
      islandX = 105;
    } else {
      islandX -= islandSpeed; // 0.35
    }
    island.style.left = `${islandX}%`;

    for (let i = 0; i < 3; i++) {
      if (seawaveX[i] < -10) {
        seawaveX[i] = 110;
      } else if (scrollPos < 20000) {
        seawaveX[i] -= (i + 10) / seawaveSpeed; // (i+10)/35
      }
      seaWaves[i].style.left = `${seawaveX[i]}%`;
    }

    for (let i = 0; i < 5; i++) {
      if (cloudX[i] < -10) {
        cloudX[i] = 110;
      } else {
        cloudX[i] -= cloudSpeed; // 1.2
      }
      clouds[i].style.left = `${cloudX[i]}%`;
    }
  }
  if (scrollPos >= 500 && scrollPos < 20000) {
    welcomeText.style.top = "250";
    welcomeText.style.opacity = 1;
    airplane.style.height = 400;
  } else if (scrollPos >= 20000 && scrollPos < 20500) {
    welcomeText.style.opacity = 1 - (scrollPos - 20000) / 500;
    welcomeText.style.top = `${250 - (scrollPos - 20000) / 10}`;
    airplane.style.height = 400;
  } else if (scrollPos >= 20500 && scrollPos < 23000) {
    airplane.style.right = `${40.67 - (scrollPos - 20500) / 30}%`;
    airplane.style.height = 400 + (scrollPos - 20500) / 12;
    earthBox.style.bottom = -(scrollPos - 20500) / 10;
  } else if (scrollPos > 23000) {
    airplane.style.rignt = "-30%";
    earthBox.style.bottom = -300;
  }

  if (scrollPos >= 20500) {
    welcomeText.style.opacity = 0;
    // container.style.backgroundColor = "rgb(242,177,181)";
    container.style.backgroundColor = "rgb(70,109,181)";
  }

  if (scrollPos >= 20000) {
    islandSpeed = 0;
    cloudSpeed = 0;
  } else {
    islandSpeed = 0.35;
    seawaveSpeed = 35;
    cloudSpeed = 1.2;
  }

  if (scrollPos >= 23000 && scrollPos < 24200) {
    airplane.style.opacity = 0;
    titleBox.style.display = "flex";
    titleBox.style.opacity = `${(scrollPos - 23000) / 12}%`;
    titleBox.style.top = `${43 - ((scrollPos - 23000) / 1200) * 5}%`;
  } else if (scrollPos >= 24200) {
    airplane.style.opacity = 0;
    titleBox.style.display = "flex";
    titleBox.style.opacity = 1;
    titleBox.style.top = "38%";
  } else {
    airplane.style.opacity = 1;
    titleBox.style.opacity = 0;
  }
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
