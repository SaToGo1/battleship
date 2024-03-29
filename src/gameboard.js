const ShipFactory = require("./ship");

const GameboardFactory = () => {
    // Properties
    let _size = 10; // The size of the grid will be 10x10

    // here we will save all the ships in the board.
    let _ships = [];

    // board setting 10x10 matrix, with 0
    // 0 => cell is not hit.
    // 1 => cell has a Ship that is not hit.
    // 2 => cell is hit.
    // 3 => ship hit.
    // coordinates-> _hitsBoard[y][x] / first y then x
    let _hitsBoard = [];
    for(let y = 0; y < 10; y++){
        _hitsBoard.push([])
        _hitsBoard[y].push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    // This board will contain -1 if empty and
    // the ship index on _ships array if that cell
    // has a Ship.
    // coordinates-> _shipsBoard[y][x] / first y then x
    let _shipsBoard = [];
    for(let y = 0; y < 10; y++){
        _shipsBoard.push([])
        _shipsBoard[y].push(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1);
    }

    // Geters Setters
    const getBoard = () => {
        return _hitsBoard;
    }

    const getCellYX = (y, x) => {
        return _hitsBoard[y][x];
    }

    const getSize = () => {
        return _size;
    }

    // METHODS
    /**
     * Places the ship in the board.
     * 
     * @param {Number} y Coordinate
     * @param {Number} x Coordinate
     * @param {Number} length length of the ship
     * @param {Boolean} isHorizontal is the ship placed in horizontal?
     */
    const placeShip = (y, x, length, isHorizontal=true) => {
        
        // Place Ship Horizontal
        if(isHorizontal){ 
            // Ship is inside the edges of the board
            if( (x + length - 1 < _size) && (x > -1) ){

                // Checks Collision
                let collision = [];
                for(let i = x; i < (x+length); i++){
                    collision.push(_hitsBoard[y][i]);
                }
                if(collision.includes(1)){
                    return false;
                }

                let ship = ShipFactory(length);

                // space filled with a ship equal to 1 in the Hitsboard.
                // space filled with a ship equal to the index of the 
                //      ship(in _ships array) in the Shipsboard.
                for(let i = x; i < (x+length); i++){
                    _hitsBoard[y][i] = 1;
                    _shipsBoard[y][i] = _ships.length;
                }
                _ships.push(ship);
                return true;
            }

        // Place Ship Vertical
        }else{ 

            // Ship is inside the edges of the board
            if( (y + length - 1 < _size) && (y > -1) ){
                // Checks Collision
                let collision = [];
                for(let i = y; i < (y+length); i++){
                    collision.push(_hitsBoard[i][x]);
                }
                if(collision.includes(1)){
                    return false;
                }

                let ship = ShipFactory(length);

                // space filled with a ship equal to 1 in the Hitsboard.
                // space filled with a ship equal to the index of the 
                //      ship(in _ships array) in the Shipsboard.
                for(let i = y; i < (y+length); i++){
                    _hitsBoard[i][x] = 1;
                    _shipsBoard[i][x] = _ships.length;
                }
                _ships.push(ship);
                return true;
            }
        }
        return false;
    }

    /**
     * Recieve an atack in the coordinates y,x of the board.
     * 
     * @param {Number} y Coordinates
     * @param {Number} x Coordinates
     * @returns {boolean} returns true if the attack has been executed.
     */
    const receiveAttack = (y, x) => {
        // y,x are out of the edges. we do nothing
        if( (y>=0 && x>=0) && (y<=_size && x<=_size)){
            // Hit the ship
            if(_hitsBoard[y][x] === 1){ 
                _hitsBoard[y][x] = 3;     

                let shipIndex = _shipsBoard[y][x];
                let shipHitted = _ships[shipIndex];
                shipHitted.hit();

            // Hit the water
            }else if(_hitsBoard[y][x] === 0){
                _hitsBoard[y][x] = 2;
                
            // Cell already hit (cell === 2 or cell === 3 )
            }else{ 
                return false;
            }
            return true;
        }
        return false;
    }

    /**
     * check if all the ships are sunk.
     * 
     * @returns {boolean} returns true if all the ships are sunk.
     */
    const areAllSunk = () => {
        let lastSunk = true;
        let actualSunk = true;
        // iterate over all the ships if one ship is not sunk 
        // (isSunk == false) from there on all the results 
        // of (lastSunk && actualSunk) will be false.
        for(let i = 0; i < _ships.length; i++){
            lastSunk = (lastSunk && actualSunk);
            actualSunk = _ships[i].isSunk();
        }

        return (lastSunk && actualSunk)
    }

    return {
        // Getters
        getBoard,
        getSize,
        getCellYX,

        // Methods
        placeShip,
        receiveAttack,
        areAllSunk,

        _hitsBoard
    }
}

module.exports = GameboardFactory;