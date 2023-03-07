function GameboardFactory(){
    // Properties
    _size = 10; // The size of the grid will be 10x10
    
    // board setting 10x10 matrix, with 0
    // 0 => cell is not hit.
    // 1 => cell is hit.
    _board = [];
    for(let i = 0; i < 10; i++){
        _board.push([])
        _board[i].push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    // Geters Setters
    const getBoard = () => {
        return _board;
    }

    // METHODS

    return {
        getBoard
    }
}

module.exports = GameboardFactory;