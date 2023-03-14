class DomEvents {
    constructor(){
        
    }

    /**
     * if button exists add an event that executes a callback 
     * when click over the Button.
     * 
     * @param {DOM Element} playButton 
     * @param {function} cb 
     */
     setButtonClickEvent(button, cb) {
        // if button exists.
        if(button){
            button.addEventListener('click', cb);
        }
    }

    /**
     * Add event to all the cells of the board.
     * 
     * @param {DOM Array} cellArray Array that contain all the cell elements of the DOM.
     * @param {Number} boardSize Size of the board in which we will play. to know the number of cells.
     * @param {Function} cb Callback to execute when the event is fired.
     */
    setCellsEvent(cellArray, boardSize, cb){
        for(let i = 0; i < cellArray.length; i++){
            let x = i % boardSize;
            let y = Math.floor(i / boardSize) * (boardSize / 10);
            let cell = cellArray[i];

            cell.addEventListener('click', () => {
                cb(cell, y, x);
            });
        }
    }
}

module.exports = DomEvents