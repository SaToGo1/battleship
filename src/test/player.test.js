const Player = require("../player")
const GameboardFactory = require("../gameboard");

describe('Player', () => {

    // *this is tested in the gameboard receive attack test
    // if it does not work erase and focus on that test.
    it('Player attack', () => {
        let player = Player()
        let GB = GameboardFactory();
        GB.placeShip(1, 1, 5, false);

        player.attackBoard(GB, 1, 1);
        expect(GB.getBoard()).toEqual(boardAttacked1)
        player.attackBoard(GB, 1, 2);
        expect(GB.getBoard()).toEqual(boardAttacked2);
    })

    it('computerPlays', () => {
        let player = Player()
        let GB = GameboardFactory();

        player.computerPlays(GB)

        // the next code is to check if there 
        // is a 2 in the board matrix.
        let board = GB.getBoard()
        let containTwo = false;
        for(let i = 0; i < board.length; i++){
            let row = board[i]
            for(let j = 0; j < row.length; j++){
                if(row[j] == 2){
                    containTwo = true
                }

            }
        }
        
        expect(containTwo).toBe(true)
    })
})


let boardAttacked1 = 
[
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let boardAttacked2 = 
[
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 2, 2, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];