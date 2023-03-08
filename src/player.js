
function Player(){

    // Methods
    const attackBoard = (GB, y, x) => {
        GB.receiveAttack(y,x);
    }

    return {
        attackBoard
    }
}

module.exports = Player