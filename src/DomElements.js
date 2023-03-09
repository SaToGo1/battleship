import './styles/domElements.css';

class DomElements {
    constructor(){
        this.mainContent = document.getElementById("main__content");
    }

    getPlayButton(){
        let playButton = document.createElement('button')
        playButton.textContent = "Play"
        playButton.classList.add('main__playButton')
        return playButton;
    }

    loadPlayScreen(){
        let playButton = this.getPlayButton();
        // this.mainContent.innerHTML = " ";
        this.mainContent.appendChild(playButton);
    }
    
}

// <button class="main__playButton">Play</button>

//module.exports = DomElements;
export default DomElements;