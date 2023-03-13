import DomElementsModule from './DomElements';

const DomEventsModule = require("./DomEvents");
const GameModule = require("./game");

let DomElements = new DomElementsModule();
let DomEvents = new DomEventsModule();

let Game = new GameModule();

// LOAD PLAY SCREEN
DomElements.loadPlayScreen();
let playButton = DomElements.getPlayButton();
DomEvents.setButtonClickEvent(playButton, gameStart);

// LOAD RETRY SCREEN
// DomElements.loadRetryScreen('win');
// let retryButton = DomElements.getRetryButton();
// DomEvents.setButtonClickEvent(retryButton, gameFlow);

function gameStart() {
    let playerBoard = Game.getPlayerBoard();
    let computerBoard = Game.getComputerBoard()

    DomElements.loadBoardScreen(playerBoard, computerBoard);
    
    // set Cell events
    let cellArray = DomElements.getCellArray();
    DomEvents.setCellsEvent(cellArray, computerBoard.getSize(), cellEvent);
}

function cellEvent(cell, y, x) {
    let playerBoard = Game.getPlayerBoard();
    let computerBoard = Game.getComputerBoard()

    // the player attacks on the cell he clicked
    Game.playerTurn(y, x);
    DomElements.printCell(cell,y,x, computerBoard);
    
    // computer attack on a cell and we get the coordinated of the attack.
    let [xComputerAttack, yComputerAttack] = Game.computerTurn();
    console.log(' ');
}

// instead of Game.play will do
// Game.playerTurn();
// Game.ComputerTurn();
// Game.wincondition();
// so we have more control on the returns of Game so we can
// call the appropiate DomElements from index.js