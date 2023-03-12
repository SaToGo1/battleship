
const Player = () => {

    // Methods
    const attackBoard = (GB, y, x) => {
        GB.receiveAttack(y,x);
    }

    const computerPlays = (GB) => {

        // while the attack has not been executed we keep
        // calling receive attack, this happens if we hit a
        // cell that was already attacked.
        let attackExecuted = false
        while(!attackExecuted){
            // generate random number between 0 - 9
            let x = Math.floor(Math.random() * 10);
            let y = Math.floor(Math.random() * 10);

            attackExecuted = GB.receiveAttack(y, x)
        }
    }

    return {
        attackBoard,
        computerPlays
    }
}

module.exports = Player