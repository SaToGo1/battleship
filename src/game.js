const PlayerFactory = require("./player");
const GameboardFactory = require("./gameboard");

const PLAYER = "player"
const COMPUTER = "computer"

class Game {
    constructor() {
        // Initialize Players
        this.player = PlayerFactory();
        this.computer = PlayerFactory();

        // Initialize GameBoards
        this.gameBoardPlayer = GameboardFactory();
        this.gameBoardComputer = GameboardFactory();

        // Temporary we set 3 ships in each board
        gameBoard1.placeShip(1,1,5,false);
        gameBoard1.placeShip(3,3,4,true);
        gameBoard1.placeShip(6,6,3,false);

        gameBoard2.placeShip(1,1,5,false);
        gameBoard2.placeShip(3,3,4,true);
        gameBoard2.placeShip(6,6,3,false);

        this.actualTurn = PLAYER;

        // saves the winner of the game
        this.winner = null;
    }


    mainGameLoop(){
        
        // while ( PLAYING THE GAME ) // winner == null

        // Player Turn
        if(this.actualTurn == PLAYER){
            console.log("player Turn");
        
            // change turn at the end
            this.actualTurn = COMPUTER
        // Computer Turn
        }else{
            console.log("computer Turn");

            // change turn at the end
            this.actualTurn = PLAYER
        }

        // ENDWHILE

        // if( WINNER = PERSON) this.winscreen()
        // if( WINNER = COMPUTER) this.losescreen()
    }
}





// constructor(domElements, domEvents)
// actualTurn= 'player' 'computer'
// MainGameLoop()
// player turn()
// Computer turn()
// win condition()

// win() -> winscreen()
// lose() -> losecreen()
//   --> retry and play.