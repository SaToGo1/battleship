class Ship {
    constructor(length, hit=0){
        this.length = length;
        this.numberHits=hit;
    }

    hit(){
        this.numberHits++
    }

    isSunk(){
        if(this.numberHits >= this.length) return true;
        return false;
    }
}

module.exports = Ship;