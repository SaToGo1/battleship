const GameboardFactory = require("../gameboard");
const ShipFactory = require("../ship")

describe('GameBoard', () => {

    it('board inicialization', () => {
        let GB = GameboardFactory();
        expect(GB.getBoard()).toStrictEqual(boardInicialization);
    })

    it('place ship', () => {
        let GB = GameboardFactory();

        // Ship will be placed on 'x' from y,x=1,1 to y,x=1,5
        // you can see boardPlaceShip below to see position in board
        GB.placeShip(1, 1, 5, true);
        expect(GB.getBoard()).toStrictEqual(boardPlaceShip);

        // Ship will not be placed because is out of edges
        // So we will keep the same board as before.
        GB.placeShip(7, 7, 5, true);
        expect(GB.getBoard()).toStrictEqual(boardPlaceShip);
    })
})


let boardInicialization = 
[
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let boardPlaceShip = 
[
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];