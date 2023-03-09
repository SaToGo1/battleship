import './styles/domElements.css';

class DomElements {
    constructor(){
        this.mainContent = document.getElementById("main__content");
    }

    buildPlayButton(){
        let playButton = document.createElement('button')
        playButton.textContent = "Play"
        playButton.classList.add('main__playButton')
        return playButton;
    }

    loadPlayScreen(){
        let playButton = this.buildPlayButton();
        // this.mainContent.innerHTML = " ";
        this.mainContent.appendChild(playButton);
    }

    buildBoard(){
        let x = 10
        let y = 10;
        let total = x*y;

        let board = document.createElement("div");
        board.classList.add("board")
        console.log('hi')

        for(let i = 0; i < (x*y); i++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            board.appendChild(cell);
            console.log('hi2');
        }

        return board;
    }

    loadBoardScreen(){
        let board1 = this.buildBoard();
        let board2 = this.buildBoard();
        // this.mainContent.innerHTML = " ";
        this.mainContent.appendChild(board1);
        //this.mainContent.appendChild(board2);
    }
    
}

// <button class="main__playButton">Play</button>

//module.exports = DomElements;
export default DomElements;