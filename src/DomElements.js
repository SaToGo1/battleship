import './styles/domElements.css';

class DomElements {
    constructor(){
        this.mainContent = document.getElementById("main__content");
    }

    _buildPlayButton(){

        let playButton = document.createElement('button')
        playButton.textContent = "Play"
        playButton.classList.add('main__playButton')
        playButton.id = "playButton"
        return playButton;
    }

    _buildBoard(){
        let x = 10
        let y = 10;
        let total = x*y;

        let board = document.createElement("div");
        board.classList.add("board")

        for(let i = 0; i < (x*y); i++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
        }

        return board;
    }

    _GameUI() {
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

        let divPlayer1 = document.createElement('div');
        divPlayer1.classList.add("divPlayer");

        let divPlayer2 = document.createElement('div');
        divPlayer2.classList.add("divPlayer");

        let player1Title = document.createElement('h2');
        player1Title.textContent = "Player 1";

        let player2Title = document.createElement('h2');
        player2Title.textContent = "Player 2";

        let board1 = this._buildBoard();
        let board2 = this._buildBoard();

        divPlayer1.appendChild(player1Title);
        divPlayer1.appendChild(board1);

        divPlayer2.appendChild(player2Title);
        divPlayer2.appendChild(board2);

        gameUIdiv.appendChild(divPlayer1);
        gameUIdiv.appendChild(divPlayer2);

        return gameUIdiv;
    }

    loadBoardScreen(){
        // Reset mainContent and ready for the board screen.
        this.mainContent.innerHTML = '';
        this.mainContent.style["min-width"] = "100%";
        this.mainContent.style["min-height"] = "100%";

        let gameUIdiv = this._GameUI();

        this.mainContent.appendChild(gameUIdiv);
    }

    loadPlayScreen(){
        // Reset mainContent and ready for the play screen.
        this.mainContent.innerHTML = '';
        this.mainContent.style["min-width"] = "0";
        this.mainContent.style["min-height"] = "0";

        let playButton = this._buildPlayButton();
        // this.mainContent.innerHTML = " ";
        this.mainContent.appendChild(playButton);
    }

    //Getters for DOM ELEMENTS
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
}

// <button class="main__playButton">Play</button>

//module.exports = DomElements;
export default DomElements;