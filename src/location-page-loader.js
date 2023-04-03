import odinFaceImage from "./imgs/odinlogo.png";
import googleMapExampleImage from "./imgs/googlemapsexample.png";

export default function locationPageLoader() {
  const contentDiv = document.getElementById("content");

  const homePageContainer = document.createElement("div");
  homePageContainer.classList.add("main-content");

  let introduction = document.createElement("h2");
  introduction.textContent = "Location";

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container-map");

  let image = new Image();
  image.classList.add("odin-map");
  image.src = googleMapExampleImage;

  imageContainer.appendChild(image);

  homePageContainer.appendChild(introduction);
  homePageContainer.appendChild(imageContainer);

  contentDiv.appendChild(homePageContainer);
}
