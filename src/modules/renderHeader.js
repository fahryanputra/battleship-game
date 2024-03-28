import { createText } from "../utilities/utility";

function renderHeader() {
  const copyright = createText("Battleship Game");

  const container = document.querySelector("header");
  container.appendChild(copyright);

  return container;
}

export default renderHeader;
