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

    /**
     * This Will place a event over the cells of player board so as we pass through it shows the ships.
     * 
     * @param {Dom Array} cellArray Array with all the cells of the player board.
     * @param {Number} boardSize size of the player board
     * @param {Number} shipLength Length of the ship we want to add
     * @param {Function} cb callback function executed when we pass the mouse over the player board.
     */
    placeShipOnMouseOver(cellArray, boardSize, cb) {
        for(let i = 0; i < cellArray.length; i++){
            let x = i % boardSize;
            let y = Math.floor(i / boardSize) * (boardSize / 10);
            let cell = cellArray[i];

            cell.addEventListener("mouseover", () => {
                cb(cell, y, x);
            });
        }
    }

    /**
     * This Will place a event over the cells of player board so as we pass through the cells
     * they don't save the preview of how the ship would be placed.
     * 
     * @param {Dom Array} cellArray Array with all the cells of the player board.
     * @param {Number} boardSize size of the player board
     * @param {Number} shipLength Length of the ship we want to add
     * @param {Boolean} isHorizontal the Ship will be placed horizontal or vertical?
     * @param {Function} cb callback function executed when we pass the mouse over the player board.
     */
     placeShipOnMouseOut(cellArray, cb) {
        for(let i = 0; i < cellArray.length; i++){
            let cell = cellArray[i];

            cell.addEventListener("mouseout", () => {
                cb();
            });
        }
    }

    placeShipOnClick(cellArray, boardSize, shipSize, cb) {
        return new Promise(resolve => {
            
            // function listener(){
            //     for(let i = 0; i < cellArray.length; i++){
            //         let cell = cellArray[i];
                    
            //         cell.removeEventListener('click', listener);
            //     }

            //     alert('hi')
            //     // cb(cell, y, x)
            //     resolve();
            // }

            for(let i = 0; i < cellArray.length; i++){
                let x = i % boardSize;
                let y = Math.floor(i / boardSize) * (boardSize / 10);
                let cell = cellArray[i];
                
                cell.addEventListener("click", () => {    
                    cb(y, x, shipSize)
                    resolve();
                });
            }

        })
    }

}

module.exports = DomEvents