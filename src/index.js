import DomElementsModule from './DomElements';

const DomEventsModule = require("./DomEvents");
const GameModule = require("./game");

let DomElements = new DomElementsModule();
let DomEvents = new DomEventsModule();

let Game = new GameModule();

// LOAD PLAY SCREEN
DomElements.loadPlayScreen();
let playButton = DomElements.getPlayButton();
DomEvents.setButtonClickEvent(playButton, gameFlow);

// LOAD RETRY SCREEN
// DomElements.loadRetryScreen('win');
// let retryButton = DomElements.getRetryButton();
// DomEvents.setButtonClickEvent(retryButton, gameFlow);

function gameFlow() {
    DomElements.loadBoardScreen(Game.getPlayerBoard(), Game.getComputerBoard());
}
