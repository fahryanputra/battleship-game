import "./styles/style.css";
import { initializeGame, gameController } from "./modules/gameController";
import renderGameboard from "./modules/renderGameboard";
import Game from "./modules/Game";

const game = new Game();

initializeGame(game);
renderGameboard(game);
