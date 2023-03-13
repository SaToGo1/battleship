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
    let playerBoard = Game.getPlayerBoard();
    let computerBoard = Game.getComputerBoard()

    DomElements.loadBoardScreen(playerBoard, computerBoard);
    
    // set Cell events
    let cellArray = DomElements.getCellArray();
    DomEvents.setCellsEvent(cellArray, computerBoard.getSize(), cellEvent);
}

function cellEvent(cell, y, x) {
    console.log('cell Event activated');
    console.log(`cell: ${cell}`);
    console.log(`y: ${y}`);
    console.log(`x: ${x}`);
    console.log(' ');
}