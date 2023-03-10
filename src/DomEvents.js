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
}

module.exports = DomEvents