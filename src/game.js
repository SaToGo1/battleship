const PlayerFactory = require("./player");
const GameboardFactory = require("./gameboard");

const PLAYER = "player";
const COMPUTER = "computer";

class Game {
    constructor() {
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

    // Getters
    getPlayerBoard() {
        return this.gameBoardPlayer
    }
    
    getComputerBoard() {
        return this.gameBoardComputer
    }

    getWinner(){
        return this.winner;
    }
}

module.exports = Game


// TODO
// win condition()