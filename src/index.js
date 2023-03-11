import DomElementsModule from './DomElements';

const DomEventsModule = require("./DomEvents");

let DomElements = new DomElementsModule();
let DomEvents = new DomEventsModule();


DomElements.loadPlayScreen();

let playButton = DomElements.getPlayButton();
DomEvents.setButtonClickEvent(playButton, gameFlow);

function gameFlow() {
    DomElements.loadBoardScreen();
    console.log('hi')
}