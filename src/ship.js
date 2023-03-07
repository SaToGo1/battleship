class Ship {
    constructor(length, hit=0, sunk=false){
        this.length = length;
        this.numberHits=hit;
        this.sunk=sunk
    }

    hit(){
        this.numberHits++
    }
}

module.exports = Ship;