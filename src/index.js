import DomElementsModule from './DomElements';

const DomEventsModule = require("./DomEvents");
const GameModule = require("./game");

const DomElements = new DomElementsModule();
const DomEvents = new DomEventsModule();

const Game = new GameModule(DomElements, DomEvents);

// LOAD PLAY SCREEN
DomElements.loadPlayScreen();
let playButton = DomElements.getPlayButton();
DomEvents.setButtonClickEvent(playButton, Game.gameStart);