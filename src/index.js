import DomElementsModule from './DomElements';

const DomEventsModule = require("./DomEvents");

let DomElements = new DomElementsModule();
let DomEvents = new DomEventsModule();

// This will be normalFlow
DomElements.loadPlayScreen();
let playButton = DomElements.getPlayButton();
DomEvents.setButtonClickEvent(playButton, gameFlow);
// cb => Game function.

function gameFlow() {
    console.log('hi')
}