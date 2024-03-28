import "./styles/style.css";
import gameController from "./modules/gameController";
import renderGameboard from "./modules/renderGameboard";
import Game from "./modules/Game";
import renderFooter from "./modules/renderFooter";
import renderHeader from "./modules/renderHeader";

const game = new Game();

gameController(game);

renderHeader();
renderGameboard(game);
renderFooter();
