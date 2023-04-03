import odinFaceImage from "./imgs/odinlogo.png";
import menuImage from "./imgs/menu.jpg";

export default function showMenuPage() {
  const contentDiv = document.getElementById("content");

  const homePageContainer = document.createElement("div");
  homePageContainer.classList.add("main-content");

  let introduction = document.createElement("h2");
  introduction.textContent = "Menu";

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container-menu");

  let image = new Image();
  image.classList.add("odin-menu");
  image.src = menuImage;

  imageContainer.appendChild(image);

  homePageContainer.appendChild(introduction);
  homePageContainer.appendChild(imageContainer);

  contentDiv.appendChild(homePageContainer);
}
