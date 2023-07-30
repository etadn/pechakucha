import "../css/styles.css";
import etadn from "../../thierry-viera.png";

// import slide images
import slide1 from "../pictures/genesis.png";
import slide2 from "../pictures/unsteadylegs.png";
import slide3 from "../pictures/footballhappiness.png";
import slide4 from "../pictures/thepeoplearoundme.png";
import slide5 from "../pictures/jenga.png";
import slide6 from "../pictures/chess.png";
import slide7 from "../pictures/imagination.png";
import slide8 from "../pictures/software.png";
import slide9 from "../pictures/thingsidid.png";
import slide10 from "../pictures/mother.png";
import slide11 from "../pictures/alapeople.png";
import slide12 from "../pictures/rebirth.png";
import slide13 from "../pictures/friends.png";
import slide14 from "../pictures/hallmates.png";
import slide15 from "../pictures/footyatala.png";
import slide16 from "../pictures/whatbakingcando.png";
import slide17 from "../pictures/morebabysteps.png";
import slide18 from "../pictures/thatwouldbeenough.png";
import slide19 from "../pictures/music.png";
import slide20 from "../pictures/fullcircle.png";

console.log("PechaKucha is a pretty cool concept.");

const myImage = document.querySelector("header img");
myImage.src = etadn;

const slideImages = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
  slide17,
  slide18,
  slide19,
  slide20,
];

const func = () => {
  // remove the elements in the main div
  const headingOne = document.querySelector("main div h1").remove();
  const myBtn = document.querySelector("main div button").remove();

  // changing functionality.
  const mainDiv = document.querySelector("main div");

  const newSlideImage = new Image();
  const slidenumber = document.querySelector(".slide-no");

  let index = 0;

  let time = 20;

  const removeSecond = () => {
    document.querySelector(".clock").innerHTML = `${time}s`;
    time -= 1;
  };

  //   newSlideImage.src = slideImages[index];
  //   mainDiv.appendChild(newSlideImage);
  const secondInterval = setInterval(removeSecond, 1000);

  const changeImg = () => {
    newSlideImage.src = slideImages[index];
    mainDiv.appendChild(newSlideImage);
    time = 20;
    slidenumber.innerText = `Slide ${index + 1}`;
    index += 1;
    console.log(index);
  };

  changeImg();
  const changeImgInterval = setInterval(changeImg, 20000);

  if (index >= 20) {
    console.log(index);
    clearInterval(changeImgInterval);
  }
};

// func();
const clickBtn = document.querySelector("button");
clickBtn.addEventListener("click", func);
