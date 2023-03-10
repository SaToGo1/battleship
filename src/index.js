//const DomElementsModule = require("./DomElements");
import DomElementsModule from './DomElements';

let DomElements = new DomElementsModule();
// DomElements.loadPlayScreen();
// DomElements.loadBoardScreen();

// This will be normalFlow
DomElements.loadPlayScreen();
let playButton = DomElements.getPlayButton();
// DomEvents.setPlayButtonEvent(playButton, cb);
// cb => Game function.