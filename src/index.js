import DomElementsModule from './DomElements';

const DomEventsModule = require("./DomEvents");

let DomElements = new DomElementsModule();
let DomEvents = new DomEventsModule();

// LOAD PLAY SCREEN
// DomElements.loadPlayScreen();
// let playButton = DomElements.getPlayButton();
// DomEvents.setButtonClickEvent(playButton, gameFlow);

// LOAD RETRY SCREEN
DomElements.loadRetryScreen('win');
let retryButton = DomElements.getRetryButton();
DomEvents.setButtonClickEvent(retryButton, gameFlow);

function gameFlow() {
    DomElements.loadBoardScreen();
    console.log('hi gameFlow() index.js')
}
