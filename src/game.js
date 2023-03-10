const PlayerFactory = require("./player");
const GameboardFactory = require("./gameboard");

// Initialize Players
const player1 = PlayerFactory();
const player2 = PlayerFactory();

// Initialize GameBoards
const gameBoard1 = GameboardFactory();
const gameBoard2 = GameboardFactory();

// Temporary we set 3 ships
gameBoard1.placeShip(1,1,5,false);
gameBoard1.placeShip(3,3,4,true);
gameBoard1.placeShip(6,6,3,false);

gameBoard2.placeShip(1,1,5,false);
gameBoard2.placeShip(3,3,4,true);
gameBoard2.placeShip(6,6,3,false);

