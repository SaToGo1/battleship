const ShipFactory = require("./ship");

function GameboardFactory(){
    // Properties
    _size = 10; // The size of the grid will be 10x10
    _ships = [];

    // board setting 10x10 matrix, with 0
    // 0 => cell is not hit.
    // 1 => cell has a Ship that is not hit.
    // 2 => cell is hit.
    // coordinates-> _boardHits[y][x] / first y then x
    _boardHits = [];
    for(let y = 0; y < 10; y++){
        _boardHits.push([])
        _boardHits[y].push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    // This board will contain -1 if empty and
    // the ship index on _ships array if that cell
    // has a Ship.
    // coordinates-> _boardHits[y][x] / first y then x
    _boardShips = [];
    for(let y = 0; y < 10; y++){
        _boardShips.push([])
        _boardShips[y].push(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1);
    }

    // Geters Setters
    const getBoard = () => {
        return _boardHits;
    }

    // METHODS
    const placeShip = (y, x, length, isHorizontal=true) => {
        if(isHorizontal){ // Place Ship Horizontal
            if( (x + length < _size) && (x > -1) ){
                let ship = ShipFactory(length);

                for(let i = x; i < (x+length); i++){
                    _boardHits[y][i] = 1;
                    _boardShips[y][i] = _ships.length;
                }
                _ships.push(ship);
            }
        }else{ // Place Ship Vertical
            if( (y + length < _size) && (y > -1) ){
                let ship = ShipFactory(length);

                for(let i = y; i < (y+length); i++){
                    _boardHits[i][x] = 1;
                    _boardShips[i][x] = _ships.length;
                }
                _ships.push(ship);
            }
        }
    }

    return {
        getBoard,
        placeShip
    }
}

module.exports = GameboardFactory;