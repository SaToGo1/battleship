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


// GameStart and cellEvent inside Game? DomElements and DomEvents
// passed to cosntructor ?
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

    let win = true;
    // Player Attack + Print attacked Cell
    Game.playerTurn(y, x);
    DomElements.printCell(cell, y, x, computerBoard);
    if(Game.winCondition()){
        let winner = Game.getWinner();
        DomElements.loadRetryScreen(`${winner} Win`);
        return ;
    } 

    // Computer Attack + Print attacked Cell
    let [xComputerAttack, yComputerAttack] = Game.computerTurn();
    let cell2 = DomElements.getCellPlayerBoard(xComputerAttack, yComputerAttack, playerBoard)
    DomElements.printCell(cell2, yComputerAttack, xComputerAttack, playerBoard);
    if(Game.winCondition()){
        let winner = Game.getWinner();
        DomElements.loadRetryScreen(`${winner} Win`);
        return ;
    }

}