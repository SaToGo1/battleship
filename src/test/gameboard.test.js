const GameboardFactory = require("../gameboard");
const ShipFactory = require("../ship")

describe('GameBoard', () => {

    it('board inicialization', () => {
        let GB = GameboardFactory();
        expect(GB.getBoard()).toStrictEqual(emptyBoard);
    })

    it('place ship Horizontal', () => {
        let GB = GameboardFactory();

        
        // Ship will be placed on 'x' from y,x=1,1 to y,x=1,5
        // you can see boardPlaceShip below to see position in board
        GB.placeShip(1, 1, 5, true);
        expect(GB.getBoard()).toStrictEqual(boardPlaceShipHorizontal);
    })

    it('place ship vertical', () => {
        let GB = GameboardFactory();

        // Ship will be placed on 'y' from y,x=1,1 to y,x=5,1
        GB.placeShip(1, 1, 5, false);
        expect(GB.getBoard()).toStrictEqual(boardPlaceShipVertical);
    })

    it('place ship out of edges', () => {
        let GB = GameboardFactory();
        // Ship will not be placed because is out of edges
        // So we will keep the empty board after trying to place.
        
        // Horizontal
        GB.placeShip(6, 6, 5, true);
        expect(GB.getBoard()).toStrictEqual(emptyBoard);

        //Vertical
        GB.placeShip(6, 6, 5, false);
        expect(GB.getBoard()).toStrictEqual(emptyBoard);

        // Horizontal
        GB.placeShip(-1, -1, 5, true);
        expect(GB.getBoard()).toStrictEqual(emptyBoard);

        //Vertical
        GB.placeShip(-1, -1, 5, false);
        expect(GB.getBoard()).toStrictEqual(emptyBoard);
    })

    it('receive Attack', () => {
        let GB = GameboardFactory();
        GB.placeShip(1, 1, 1, false);

        GB.receiveAttack(1, 1);
        GB.receiveAttack(1, 2);
        GB.receiveAttack(1, 3);

        expect(GB.getBoard()).toStrictEqual(boardReceiveAttack);
    })
})


let emptyBoard = 
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

let boardPlaceShipHorizontal = 
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

let boardPlaceShipVertical = 
[
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let boardReceiveAttack = 
[
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 2, 2, 2, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];