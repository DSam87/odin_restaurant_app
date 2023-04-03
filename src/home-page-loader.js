import odinFaceImage from "./imgs/odinlogo.png";

export default function homePageLoader() {
  const contentDiv = document.querySelector("#content");

  const homePageContainer = document.createElement("div");
  homePageContainer.classList.add("main-content");

  let introduction = document.createElement("h2");
  introduction.textContent = "Best food in all valhalla!";

  let introductionText = document.createElement("p");
  introductionText.textContent =
    "A restaurant for all warriors who died in glorious battle!";

  introductionText.classList.add("introduction-text");

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  let image = new Image();
  image.classList.add("odin-logo");
  image.src = odinFaceImage;

  imageContainer.appendChild(image);

  homePageContainer.appendChild(introduction);
  homePageContainer.appendChild(introductionText);
  homePageContainer.appendChild(imageContainer);

  contentDiv.appendChild(homePageContainer);
}
