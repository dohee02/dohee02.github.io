// const goToHawaiiBtn = document.querySelector("#go-to-hawaii-btn");
// const goToKoreaBtn = document.querySelector("#go-to-korea-btn");
// const goToUzBtn = document.querySelector("#go-to-uz-btn");

// goToHawaiiBtn.addEventListener("click", goToHawaii);
// goToKoreaBtn.addEventListener("click", goToKorea);
// goToUzBtn.addEventListener("click", goToUz);

const infoOuterBox = document.querySelector("#info-outer-box");
// const unitInfoHeight = infoOuterBox.style.height;
const hawaiiInfo = document.querySelector("#hawaii-info");
const koreaInfo = document.querySelector("#korea-info");
const uzInfo = document.querySelector("#uz-info");

function goToHawaii() {
  hawaiiInfo.scrollIntoView(true);
}

function goToKorea() {
  koreaInfo.scrollIntoView(true);
}

function goToUz() {
  //   window.location.href = "#uz-info";
  //   infoOuterBox.location.href = "#uz-info";
  //   let uzInfoHeight = unitInfoHeight * 2;
  //   infoOuterBox.scrollTo({ top: uzInfoHeight, behavior: "smooth" });
  uzInfo.scrollIntoView(true);
}

const mapRightBtn = document.querySelector("#map-right");
const mapLeftBtn = document.querySelector("#map-left");

mapRightBtn.addEventListener("click", mapRight);
mapLeftBtn.addEventListener("click", mapLeft);

let objectPosX = 50;
let hawaiiPosX = 126;
let koreaPosX = 61;
let uzPosX = 12;
let positions = [120, 61, 13];
let opacities = [0, 1, 1];
const mapImage = document.querySelector("#map-image");
const hawaiiArr = document.querySelector("#hawaii-arr");
const koreaArr = document.querySelector("#korea-arr");
const uzArr = document.querySelector("#uz-arr");

function mapRight() {
  if (objectPosX <= 95) {
    objectPosX += 5;
    mapImage.style.objectPosition = `${objectPosX}% 0% `;
    // koreaPosX -= 4.3;
    for (let i = 0; i < 3; i++) {
      positions[i] -= 4.3;
      if (positions[i] < 2 || positions[i] > 92) {
        opacities[i] = 0;
      } else {
        opacities[i] = 1;
      }
    }
    hawaiiArr.style.left = `${positions[0]}%`;
    koreaArr.style.left = `${positions[1]}%`;
    uzArr.style.left = `${positions[2]}%`;
    hawaiiArr.style.opacity = opacities[0];
    koreaArr.style.opacity = opacities[1];
    uzArr.style.opacity = opacities[2];
  }
}
function mapLeft() {
  if (objectPosX >= 5) {
    objectPosX -= 5;
    mapImage.style.objectPosition = `${objectPosX}% 0% `;
    for (let i = 0; i < 3; i++) {
      positions[i] += 4.3;
      if (positions[i] < 2 || positions[i] > 92) {
        opacities[i] = 0;
      } else {
        opacities[i] = 1;
      }
    }
  }
  hawaiiArr.style.left = `${positions[0]}%`;
  koreaArr.style.left = `${positions[1]}%`;
  uzArr.style.left = `${positions[2]}%`;
  hawaiiArr.style.opacity = opacities[0];
  koreaArr.style.opacity = opacities[1];
  uzArr.style.opacity = opacities[2];
}

let currentDroppable = null;
const freeAirplane = document.querySelector("#free-airplane");

// const con = document.querySelector(".wrapper");
const con = document.querySelector("body");
const section = document.querySelector("#history-container");
const side = document.querySelector(".side");

freeAirplane.ondragstart = function () {
  return false;
};

const moveContainer = (e) => {
  if (!(e.target.id === "free-airplane")) return;
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;
  let shiftY = e.clientY - e.target.getBoundingClientRect().top;

  e.target.style.position = "absolute";
  e.target.style.zIndex = 3;
  section.append(e.target);

  moveAt(e.pageX, e.pageY);

  function moveAt(pageX, pageY) {
    e.target.style.left = pageX - shiftX + 12 + "px";
    e.target.style.top = pageY - shiftY - 58 + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    e.target.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    // console.log(elemBelow);
    e.target.hidden = false;

    if (!elemBelow) {
      //   console.log("can't find");
      return;
    }

    let droppableBelow = elemBelow.closest(".arr");
    console.log(droppableBelow);

    if (currentDroppable != droppableBelow) {
      //   if (currentDroppable) {
      //     leaveDroppable(currentDroppable);
      //   }
      currentDroppable = droppableBelow;
    }
    if (currentDroppable) {
      if (currentDroppable.id == "korea-arr") {
        // enterDroppable(currentDroppable);
        // appendSideElement(e.target, droppableBelow);
        goToKorea();
      } else if (currentDroppable.id == "hawaii-arr") {
        goToHawaii();
      } else if (currentDroppable.id == "uz-arr") {
        goToUz();
      }
      // enterDroppable(currentDroppable);
      // appendSideElement(e.target, droppableBelow);
    }
  }

  document.addEventListener("mousemove", onMouseMove);

  e.target.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    e.target.onmouseup = null;
  };
};

function enterDroppable(elem) {
  elem.style.borderColor = "blue";
}

function appendSideElement(elem, target) {
  const temp = elem;
  temp.style = "";
  temp.style.transition = "transition: all 3s linear;";
  temp.className = "mini";
  elem.remove();
  target.append(temp);
}

function appendMainElement(elem) {
  elem.className = "mini";
  //   side.append(elem);
}

function leaveDroppable(elem) {
  elem.style.background = "";
}

con.ondragstart = function () {
  return false;
};

con.addEventListener("mousedown", moveContainer);
