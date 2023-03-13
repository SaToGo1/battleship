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

        this.player.attackBoard(this.gameBoardComputer, 1, 1)
        this.player.attackBoard(this.gameBoardComputer, 2, 1)
    }

    playerTurn(y, x){
        this.player.attackBoard(this.gameBoardComputer, y, x);
    }

    computerTurn() {
        let [x, y] = this.computer.computerPlays(this.gameBoardPlayer);
        return [x, y];
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