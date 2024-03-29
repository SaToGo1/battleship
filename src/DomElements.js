import './styles/domElements.css';

class DomElements {
    constructor(){
        this.mainContent = document.getElementById("main__content");

        this.previewShipOnBoard = this.previewShipOnBoard.bind(this);
    }


    // ####################
    // ####################
    // # Private Methods  # 
    // ####################
    // ####################


    /**
     * Creates and returns the play button.
     * 
     * @returns DomElement button
     */
    _buildPlayButton(){

        let playButton = document.createElement('button')
        playButton.textContent = "Play"
        playButton.classList.add('main__playButton')
        playButton.id = "playButton"
        return playButton;
    }

    /**
     * Recieve the gameboard and builds the Board that will be shown on screen
     * for the player.
     * 
     * @param {Object Gameboard} gameboard 
     * @returns DomElement return the DOMElement that represents the Board.
     */
    _buildPlayerBoard(gameboard){
        let sizeX = gameboard.getSize();
        let sizeY = gameboard.getSize();
        let total = sizeX*sizeY;

        let board = document.createElement("div");
        board.classList.add("board")

        
        for(let y = 0; y < sizeY; y++){
            for (let x = 0; x < sizeX; x++){
                let cellInfo = gameboard.getCellYX(y, x);
                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add("playerCells");
                cell.id = `playerCell${y}${x}`
                this._cellContent(cellInfo, cell, true);
                board.appendChild(cell);
            }
        }

        return board;
    }
    
    /**
     * Recieve the gameboard and builds the Board that will be shown on screen
     * for the computer.
     * 
     * @param {Object Gameboard} gameboard 
     * @returns DomElement return the DOMElement that represents the Board.
     */
    _buildComputerBoard(gameboard){
        let sizeX = gameboard.getSize();
        let sizeY = gameboard.getSize();
        let total = sizeX*sizeY;

        let board = document.createElement("div");
        board.classList.add("board")

        
        for(let y = 0; y < sizeY; y++){
            for (let x = 0; x < sizeX; x++){
                let cellInfo = gameboard.getCellYX(y, x);
                let cell = document.createElement("div");
                cell.classList.add("cell");
                cell.classList.add("computerCells");
                this._cellContent(cellInfo, cell, false);
                board.appendChild(cell);
            }
        }

        return board;
    }

    /**
     * takes a cell and fills it with his content in function of if it's a water cel, a ship,
     * a ship hitted or water hitted.
     * 
     * @param {Number} cellInfo contains number of the cell that indicates if it's water, ship, ...
     * @param {DOM Element} cell DomElement of the cell we want to modify
     * @param {Boolean} isPlayer true if this is the PlayerBoard
     */
    _cellContent(cellInfo, cell, isPlayer=false){
        // Water cell == 0
            cell.textContent = ""
        // Ship cell
        if(cellInfo == 1 && isPlayer){
            cell.textContent = "#"
        // Hit Water
        }else if(cellInfo == 2){
            cell.textContent = "•"
        // Hit Ship
        }else if(cellInfo == 3){
            cell.textContent = "X"
        }
    }


    _buildRetryButton(){
        let retryButton = document.createElement('button')
        let retryIMG =document.createElement('img')

        retryIMG.classList.add('main__retryButton-IMG');
        retryIMG.src = "data:image/png;base64,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"

        retryButton.classList.add('main__retryButton')
        retryButton.id = "retryButton"
        
        retryButton.appendChild(retryIMG);
        return retryButton;
    }

    _RetryUI(message){
        /*
        <div>           -> retryDiv
            <p></p>         -> You win / Lose
            <button>        -> Retry button
        </div>
        */

        let retrydiv = document.createElement('div');
        retrydiv.classList.add("retrydiv");

        let retryMessage = document.createElement('p');
        retryMessage.classList.add("retrymessage");
        retryMessage.textContent = message;

        let retryButton = this._buildRetryButton();
        
        retrydiv.appendChild(retryMessage);
        retrydiv.appendChild(retryButton);
        
        return retrydiv;
    }

    /**
     * Creates the two boards of the player and computer to display from the 
     * data of the boards and display the name up in every board.
     * 
     * @param {Object Gameboard} gameboardPlayer gameboard of the player
     * @param {Object Gameboard} gameboardComputer gameboard of the computer
     * @returns DomElements with the two boards and two 
     */
    _GameUI(gameboardPlayer, gameboardComputer) {
        /*
        <div>               -> gameUIdiv
            <div>               -> player1div
                <h2></h2>           -> player title
                <div> ... </div>    -> BOARD
            </div>
            
            <div>               -> player2div
                <h2></h2>           -> player title
                <div> ... </div>    -> BOARD
            </div>
        </div>
        */
        let gameUIdiv = document.createElement('div');
        gameUIdiv.classList.add("gameUIdiv");

        let divPlayer = document.createElement('div');
        divPlayer.classList.add("divPlayer");
        divPlayer.id = "divPlayer"

        let divComputer = document.createElement('div');
        divComputer.classList.add("divComputer");

        let playerTitle = document.createElement('h2');
        playerTitle.textContent = "Player";

        let ComputerTitle = document.createElement('h2');
        ComputerTitle.textContent = "Computer";

        let board1 = this._buildPlayerBoard(gameboardPlayer);
        let board2 = this._buildComputerBoard(gameboardComputer);

        divPlayer.appendChild(playerTitle);
        divPlayer.appendChild(board1);

        divComputer.appendChild(ComputerTitle);
        divComputer.appendChild(board2);

        gameUIdiv.appendChild(divPlayer);
        gameUIdiv.appendChild(divComputer);

        return gameUIdiv;
    }

    /**
     * Builds a DOMElement with a text that indicates who belongs the turn to, both 
     * of the boards and which belongs to which player, and a Legend that shows what
     * means every symbol in the board.
     * 
     * @param {Object Gameboard} gameboardPlayer gameboard of the player
     * @param {Object Gameboard} gameboardComputer gameboard of the computer
     * @returns DomElement with the game interface.
     */
    _GameScreen(gameboardPlayer, gameboardComputer){
        /*
        <div>       -> GameScreen
            <div>       -> phase div
                ...
            </div>

            <div>       -> gameUIdiv  
                ...
            </div>

            <div>       -> Legend
                ...
            </div>
        </div>
        */
        let gameScreen = document.createElement('div');
        gameScreen.classList.add("gameScreen");
        gameScreen.id = "gameScreen";

        let phaseDiv = this._phaseDiv();

        let GameUI = this._GameUI(gameboardPlayer, gameboardComputer);

        let LegendDiv = this._LegendDiv();

        gameScreen.appendChild(phaseDiv);
        gameScreen.appendChild(GameUI);

        gameScreen.appendChild(LegendDiv);

        return gameScreen;


    }

    _phaseDiv(){
        let phaseDiv = document.createElement('div');
        phaseDiv.classList.add("phaseDiv");
        let phaseTitle = document.createElement('h2');
        phaseTitle.classList.add("phaseTitle");
        phaseTitle.id = "phaseTitle";
        phaseTitle.textContent = "your turn"         // This will be defined by an argument in the future.

        phaseDiv.appendChild(phaseTitle);

        return phaseDiv;
    }

    _LegendDiv(){
        let LegendDiv = document.createElement('div');
        LegendDiv.classList.add("legendDiv")

        let LegendTitle = document.createElement('h4');
        LegendTitle.textContent = ("Legend");

        LegendDiv.appendChild(LegendTitle);

        let simbol1 = document.createElement('p');
        simbol1.textContent = "[ # ]  ->  Your Ship"
        let simbol2 = document.createElement('p');
        simbol2.textContent = "[ • ]  ->  Water Hit"
        let simbol3 = document.createElement('p');
        simbol3.textContent = "[ X ]  ->  Ship Hit"

        LegendDiv.appendChild(simbol1);
        LegendDiv.appendChild(simbol2);
        LegendDiv.appendChild(simbol3);

        return LegendDiv;
    }


    // ##################
    // ##################
    // # Public Methods # 
    // ##################
    // ##################


    /**
     * gets the gameboard data and converts it into gameboard on screen.
     * This creates the elements of all the screen .
     * 
     * @param {gameboard} gameboardPlayer gameboard of the player
     * @param {gameboard} gameboardComputer gameboard of the computer
     */
    loadBoardScreen(gameboardPlayer, gameboardComputer){
        // Reset mainContent and ready for the board screen.
        this.mainContent.innerHTML = '';
        this.mainContent.style["min-width"] = "100%";
        this.mainContent.style["min-height"] = "100%";

        let gameScreen = this._GameScreen(gameboardPlayer, gameboardComputer);
        //let gameUIdiv = this._GameUI(gameboardPlayer, gameboardComputer);

        this.mainContent.appendChild(gameScreen);
    }

    /**
     * Loads the screen with the play button.
     */
    loadPlayScreen(){
        // Reset mainContent and ready for the play screen.
        this.mainContent.innerHTML = '';
        this.mainContent.style["min-width"] = "0";
        this.mainContent.style["min-height"] = "0";

        let playButton = this._buildPlayButton();
        // this.mainContent.innerHTML = " ";
        this.mainContent.appendChild(playButton);
    }

    /**
     * loads the screen with the Retry buttons and display the winners
     * @param {string} message display "Win" / "Lose"
     */
    loadRetryScreen(message) {
        this.mainContent.innerHTML = '';
        this.mainContent.style["min-width"] = "0";
        this.mainContent.style["min-height"] = "0";

        let retryDiv = this._RetryUI(message);
        this.mainContent.appendChild(retryDiv);
    }
    
    /**
     * Gets the cell, search for his value in the board and print the value
     * inside of the cell in the DOM.
     * 
     * @param {Dom} cell Dom with the cell in which we have to print
     * @param {Number} y Coordinates of the cell in the board
     * @param {Number} x Coordinates of the cell in the board
     * @param {Object Gameboard} gameboard 
     */
    printCell(cell, y, x, gameboard){
        let cellInfo = gameboard.getCellYX(y, x);
        this._cellContent(cellInfo, cell, false);
        
        cell.classList.add("cellClicked");
        setTimeout(() =>{
            cell.classList.remove("cellClicked");
        }, 2000);
    }

    /**
     * Shows on screen in the phaseDiv the string that is passed as argument.
     * 
     * @param {String} message
     */
    changePhase(message) {
        let phaseTitle = document.getElementById("phaseTitle");
        phaseTitle.textContent = message;
    }

    printBoard(boardSize, gameboard){
        let cellArray = document.getElementsByClassName('playerCells');
        if(cellArray){
            for(let i = 0; i < cellArray.length; i++){
                let cell = cellArray[i];
                let x = i % boardSize;
                let y = Math.floor(i / boardSize) * (boardSize / 10);
                let cellInfo = gameboard.getCellYX(y, x);

                this._cellContent(cellInfo, cell, true);
            }
        }
    }

    reBuildPlayerBoard(gameBoardPlayer){
        let divPlayer = document.getElementById('divPlayer');
        divPlayer.innerHTML = ' ';

        let playerTitle = document.createElement('h2');
        playerTitle.textContent = "Player";

        let board = this._buildPlayerBoard(gameBoardPlayer);
            
        divPlayer.appendChild(playerTitle);
        divPlayer.appendChild(board);

    }
    // ############################
    // ############################
    // # Getters for DOM ELEMENTS # 
    // ############################
    // ############################


    /**
     * returns the playButton element, if it does not exist returns 
     * null, a Falsy value.
     * 
     * @returns DOMElement or null(falsy value)
     */
    getPlayButton(){
        let playButton = document.getElementById('playButton');
        return playButton;
    }

    /**
     * returns the retryButton element, if it does not exist returns 
     * null(Falsy value).
     * 
     * @returns DOMElement(<button>)
     */
    getRetryButton(){
        let retryButton = document.getElementById('retryButton');
        return retryButton;
    }

    /**
     * 
     * @returns {Array} array with all the cells of the computer board.
     */
    getCellArray(){
        // We get all the cells in the computer Board.
        let cellArray = document.getElementsByClassName('computerCells');
        return cellArray;
    }

    getPlayerCellArray(){
        let cellArray = document.getElementsByClassName('playerCells');
        return cellArray;
    }


    /**
     * gets the board of the player and the coordinates of our cell and search for the DOM
     * cell that is placed on those coordinates and then returns it.
     * 
     * @param {Number} X Coordinates of the cell
     * @param {Number} Y Coordinates of the cell
     * @param {Object Gameboard} board this is the gameboard of the player.
     * @returns {DOM} returns a cell that is in the board on screen.
     */
    getCellPlayerBoard(X, Y, board){
        let cell;
        let cellArray = document.getElementsByClassName('playerCells');
        let boardSize = board.getSize();
        for(let i = 0; i < cellArray.length; i++){
            let x = i % boardSize;
            let y = Math.floor(i / boardSize) * (boardSize / 10);   // Im not sure about the * (boardSize / 10) maybe this gives problems
                                                                    // if size is bigger than 10 if that happens just delete that part.
            if(x === X && y ===Y){
                cell = cellArray[i];
            }
        }
        return cell
    }

    // #################
    // # Placing Ships #
    // #################
    addRotateButton(){
        let divPlayer = document.getElementById("divPlayer");
        let buttonRotate = document.createElement("button");
        buttonRotate.classList.add('buttonRotate');
        buttonRotate.id = "buttonRotate";
        buttonRotate.textContent = "Rotate";

        divPlayer.appendChild(buttonRotate);

        return buttonRotate;
    }

    deleteRotateButton(){
        let buttonRotate = document.getElementById("buttonRotate");
        buttonRotate.remove();
    }

    /**
     * This will give us a preview of how a ship will be placed on the board as we pass through it.
     * 
     * @param {DOM} cell actual cell where we want the preview of the ship.
     * @param {Number} y coordinates of the actual cell.
     * @param {Number} x coordinates of the actual cell.
     * @param {Number} shipLength so we know how much we have to extend the preview.
     */
    previewShipOnBoard(cell, y, x){
        if(this.isHorizontal){
            for(let i = 0; i<this.shipLength; i++){
                if(i == 0){
                    cell.classList.add('placeShip');
                }else{
                    let cellAux = document.getElementById(`playerCell${y}${x+i}`)
                    if(cellAux){
                        cellAux.classList.add('placeShip');
                    }
                }
            }
        }else{
            for(let i = 0; i<this.shipLength; i++){
                if(i == 0){
                    cell.classList.add('placeShip');
                }else{
                    let cellAux = document.getElementById(`playerCell${y+i}${x}`)
                    if(cellAux){
                        cellAux.classList.add('placeShip');
                    }
                }
            }
        }
    }

    quitPreviewShipOnBoard(){
        let cellArray = document.getElementsByClassName('playerCells');
        for(let i = 0; i < cellArray.length; i++){
            cellArray[i].classList.remove('placeShip');
        }
    }

    setIsHorizontal(bool) {
        this.isHorizontal = bool;
    }

    setShipLength(num) {
        this.shipLength = num;
    }
}

export default DomElements;