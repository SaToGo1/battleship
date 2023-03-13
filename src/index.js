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
    // set Cell events
    let cellArray = DomElements.getCellArray();
    

    // while we don't have a winner the game keep going.
    // getWinner() is by default null !(null) == true
    // while get winner is null the game continue
    // when we have a winner getWinner = string the game ends
    while(!(Game.getWinner())){
        break;
    }
    // WHILE NOT WINNER (get winner)
        // onclick playerTurn()
        // printScreen
        // winCondition()
        // computerTurn()
        // printScreen
        // winCondition()
    // END WHILE

    // get winner
    // Reset Screen()

}