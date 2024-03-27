import "./styles/style.css";
import gameController from "./modules/gameController";
import renderGameboard from "./modules/renderGameboard";
import Game from "./modules/Game";

const game = new Game();

gameController(game);
renderGameboard(game);
