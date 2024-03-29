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
        this._placeShip = this._placeShip.bind(this);

        // Initialize Players
        this.player = PlayerFactory();
        this.computer = PlayerFactory();

        // Initialize GameBoards
        this.gameBoardPlayer = GameboardFactory();
        this.gameBoardComputer = GameboardFactory();

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

        this.winner = null;
    }

    /**
     * returns the winner of the game.
     * @returns {string} winner of the game.
     */
    getWinner(){
        return this.winner;
    }

    /**
     * Set up the game, shows the game screen, wait until player place the ships and then
     * starts the play phase.
     */
    gameStart() {
        // LOAD GAME SCREEN
        this.DomElements.loadBoardScreen(this.gameBoardPlayer, this.gameBoardComputer);
        
        // PLACE SHIPS
        this.placeAllShips()
            .then(() => {
                this.placeComputerShips();

                // set Cell events
                this.DomElements.changePhase("Play");
                let cellArray = this.DomElements.getCellArray();
                this.DomEvents.setCellsEvent(cellArray, this.gameBoardComputer.getSize(), this.mainGameFlow);
            })
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

    async placeAllShips(){
        this.DomElements.changePhase("Place your ships");
        let buttonRotate = this.DomElements.addRotateButton();
        this.DomEvents.setButtonClickEvent(buttonRotate, this._changeIsHorizontal);

        await this._placeOneShip(5)
        await this._placeOneShip(4)
        await this._placeOneShip(3)
        await this._placeOneShip(2)
        await this._placeOneShip(2)
        
        await this.DomElements.reBuildPlayerBoard(this.gameBoardPlayer);
    }

    async _placeOneShip(length){
        let cellArray = this.DomElements.getPlayerCellArray();
        this.shipPlaced = false;
        this.DomElements.setShipLength(length);
        this.shipToPlaceLen = length;
        this._shipPreview(cellArray);

        while(!this.shipPlaced){
            await this.DomEvents.placeShipOnClick(cellArray,  this.gameBoardPlayer.getSize(), length, this._placeShip);
            await this.DomElements.reBuildPlayerBoard(this.gameBoardPlayer);
            await this._shipPreview(cellArray);
            await this.DomEvents.setButtonClickEvent(this.DomElements.addRotateButton(), this._changeIsHorizontal)
        }
    }

    _placeShip(y, x, length){
        this.shipPlaced = this.gameBoardPlayer.placeShip(y,x, this.shipToPlaceLen, this.placeHorizontal);
    }

    _shipPreview(cellArray){
        this.DomEvents.placeShipOnMouseOver(    
            cellArray, 
            this.gameBoardPlayer.getSize(), 
            this.DomElements.previewShipOnBoard
        )

        this.DomEvents.placeShipOnMouseOut(    
            cellArray, 
            this.DomElements.quitPreviewShipOnBoard
        )
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

    placeComputerShips(){
        this._placeSingleComputerShip(5);
        this._placeSingleComputerShip(4);
        this._placeSingleComputerShip(3);
        this._placeSingleComputerShip(2);
        this._placeSingleComputerShip(2);
    }
    
    _placeSingleComputerShip(length){
        let x = 0;
        let y = 0;
        let horizontal = true;
        let shipPlaced = false;
        while(!shipPlaced){
            // generate random number between 0 - 9
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            horizontal = Math.random() >= 0.5;

            shipPlaced = this.gameBoardComputer.placeShip(y, x, length, horizontal);
        }
    }
}

module.exports = Game