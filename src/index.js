import DomElementsModule from './DomElements';

const DomEventsModule = require("./DomEvents");
const GameModule = require("./game");

const DomElements = new DomElementsModule();
const DomEvents = new DomEventsModule();

const Game = new GameModule();

// LOAD PLAY SCREEN
DomElements.loadPlayScreen();
let playButton = DomElements.getPlayButton();
DomEvents.setButtonClickEvent(playButton, gameStart);



function gameStart() {
    let playerBoard = Game.getPlayerBoard();
    let computerBoard = Game.getComputerBoard()

    DomElements.loadBoardScreen(playerBoard, computerBoard);
    
    // set Cell events
    let cellArray = DomElements.getCellArray();
    DomEvents.setCellsEvent(cellArray, computerBoard.getSize(), cellEvent);
}

/**
 * Function that will act as callback for the cells, it defines the main
 * Flow of the game.
 * 
 * @param {DOM} cell 
 * @param {Number} y Coordinates of the cell
 * @param {Number} x Coordinates of the cell
 * @returns undefined
 */
function cellEvent(cell, y, x) {
    let playerBoard = Game.getPlayerBoard();
    let computerBoard = Game.getComputerBoard()

    let cellValue = computerBoard.getCellYX(y,x);

    // If cell is already hit, don't play on this cell.
    if( cellValue == 2 || cellValue == 3){
        return;
    }
    
    // Player Attack + Print attacked Cell + check win
    Game.playerTurn(y, x);
    DomElements.printCell(cell, y, x, computerBoard);
    if(checkWin(Game)){
        return;
    }

    // Computer Attack + Print attacked Cell + check win
    let [xComputerAttack, yComputerAttack] = Game.computerTurn();
    let cell2 = DomElements.getCellPlayerBoard(xComputerAttack, yComputerAttack, playerBoard)
    DomElements.printCell(cell2, yComputerAttack, xComputerAttack, playerBoard);
    if(checkWin(Game)){
        return;
    }
}

/**
 * check if we have a winner, if we have a winner then load the Retry Screen.
 * 
 * @param {Object Game} Game 
 * @returns {Boolean} true if we have a winner, false if there's no winner
 */
function checkWin(Game){
    if(Game.winCondition()){
        let winner = Game.getWinner();
        DomElements.loadRetryScreen(`${winner} Win`);
        let retryButton = DomElements.getRetryButton();
        DomEvents.setButtonClickEvent(retryButton, gameStart);
        Game.resetGame();

        return true;
    } 
    return false;
}