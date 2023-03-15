const PlayerFactory = require("./player");
const GameboardFactory = require("./gameboard");

const PLAYER = "player";
const COMPUTER = "computer";

class Game {
    constructor(DomElements, DomEvents) {

        this.DomElements = DomElements;
        this.DomEvents = DomEvents;

        // bind this to the method, because when we use them as a callback
        // for the events we change the context of this.
        this.gameStart = this.gameStart.bind(this);
        this.mainGameFlow = this.mainGameFlow.bind(this);
        this._changeIsHorizontal = this._changeIsHorizontal.bind(this);

        // Initialize Players
        this.player = PlayerFactory();
        this.computer = PlayerFactory();

        // Initialize GameBoards
        this.gameBoardPlayer = GameboardFactory();
        this.gameBoardComputer = GameboardFactory();

        // Temporary we set 3 ships in each board
        this.gameBoardPlayer.placeShip(1,1,5,false);
        this.gameBoardPlayer.placeShip(3,3,4,true);
        this.gameBoardPlayer.placeShip(6,6,3,false);


        this.gameBoardComputer.placeShip(1,1,5,true);
        this.gameBoardComputer.placeShip(3,3,4,false);
        this.gameBoardComputer.placeShip(6,6,3,true);

        // saves the winner of the game
        this.winner = null;

        this.placeHorizontal = true;
        this.DomElements.setIsHorizontal(true);
    }

    /**
     * The player executes and attack on the coordinates passed as arugment.
     * 
     * @param {Number} y Coordinates of the attack
     * @param {Number} x Coordinates of the attack
     */
    playerTurn(y, x){
        this.player.attackBoard(this.gameBoardComputer, y, x);
    }

    /**
     * The computer attack the enemy board
     * 
     * @returns {[Number, Number]} returns y, x coordinates of the attack executed. 
     */
    computerTurn() {
        let [x, y] = this.computer.computerPlays(this.gameBoardPlayer);
        return [x, y];
    }

    /**
     * checks if player or computer win and saves the winner, if nobody win return false.
     * 
     * @returns {Boolean} return true => win or false => nobody win.
     */
    winCondition() {
        if(this.gameBoardPlayer.areAllSunk()){
            this.winner = COMPUTER;
            return true;
        }else if(this.gameBoardComputer.areAllSunk()){
            this.winner = PLAYER;
            return true;
        }else{
            return false;
        }
    }

    /**
     * check if we have a winner, if we have a winner then load the Retry Screen.
     * 
     * @param {Object Game} Game 
     * @returns {Boolean} true if we have a winner, false if there's no winner
     */
    checkWin(){
        if(this.winCondition()){
            let winner = this.getWinner();
            this.DomElements.loadRetryScreen(`${winner} Win`);
            let retryButton = this.DomElements.getRetryButton();
            this.DomEvents.setButtonClickEvent(retryButton, this.gameStart);
            this.resetGame();

            return true;
        } 
        return false;
    }

    /**
     * erase all the data of the last game.
     */
    resetGame(){
        this.gameBoardPlayer = GameboardFactory();
        this.gameBoardComputer = GameboardFactory();

        // PLACE SHIPS
        this.gameBoardPlayer.placeShip(1,1,5,false);
        this.gameBoardPlayer.placeShip(3,3,4,true);
        this.gameBoardPlayer.placeShip(6,6,3,false);


        this.gameBoardComputer.placeShip(1,1,5,true);
        this.gameBoardComputer.placeShip(3,3,4,false);
        this.gameBoardComputer.placeShip(6,6,3,true);

        this.winner = null;
    }


    getWinner(){
        return this.winner;
    }

    gameStart() {
        // LOAD GAME SCREEN
        this.DomElements.loadBoardScreen(this.gameBoardPlayer, this.gameBoardComputer);
        
        // PLACE SHIPS
        this.placeAllShips();

        // set Cell events
        // let cellArray = this.DomElements.getCellArray();
        // this.DomEvents.setCellsEvent(cellArray, this.gameBoardComputer.getSize(), this.mainGameFlow);
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
    mainGameFlow(cell, y, x) {
        let cellValue = this.gameBoardComputer.getCellYX(y,x);

        // If cell is already hit, don't play on this cell.
        if( cellValue == 2 || cellValue == 3){
            return;
        }
        
        // Player Attack + Print attacked Cell + check win
        this.playerTurn(y, x);
        this.DomElements.printCell(cell, y, x, this.gameBoardComputer);
        if(this.checkWin()){
            return;
        }

        // Computer Attack + Print attacked Cell + check win
        let [xComputerAttack, yComputerAttack] = this.computerTurn();
        let cell2 = this.DomElements.getCellPlayerBoard(xComputerAttack, yComputerAttack, this.gameBoardPlayer)
        this.DomElements.printCell(cell2, yComputerAttack, xComputerAttack, this.gameBoardPlayer);
        if(this.checkWin()){
            return;
        }
    }

    placeAllShips(){
        this.DomElements.changePhase("Place your ships");
        let buttonRotate = this.DomElements.addRotateButton();
        this.DomEvents.setButtonClickEvent(buttonRotate, this._changeIsHorizontal);

        this.placeOneShip(5);
        // let shipsToPlace = 5;
        //this.DomElements.deleteRotateButton();
    }

    placeOneShip(length){
        let shipNotPlaced = true;
        let cellArray = this.DomElements.getPlayerCellArray();
        this.DomEvents.placeShipOnMouseOver(    cellArray, 
                                                this.gameBoardPlayer.getSize(), 
                                                length, 
                                                this.DomElements.showShipOnBoard
                                                );
        // while(shipNotPlaced){
        // }
    }

    _changeIsHorizontal(){
        if(this.placeHorizontal){
            this.placeHorizontal = false;
            this.DomElements.setIsHorizontal(false);
            return;
        }

        this.placeHorizontal = true;
        this.DomElements.setIsHorizontal(true);
    }
}

module.exports = Game


// TODO
// win condition()