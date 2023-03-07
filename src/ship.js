function ShipFactory(length, numberHits=0){
    
    // PROPERTIES
    let _length = length;
    let _numberHits = numberHits;
    
    // GETTERS SETTERS
    // we don't need to set the properties in any time,
    // we can add a reset method for the hits.
    const getLength = () => {
        return _length;
    }

    const getNumberHits = () => {
        return _numberHits;
    }


    // (LOGIC) METHODS
    const hit = () => {
        _numberHits++;
    }

    const isSunk = () => {
        if(_numberHits >= _length) return true;
        return false;
    }

    return {
        // Properties geters, seters
        getLength,
        getNumberHits,

        // (Logic) methods
        hit,
        isSunk
    }
}

module.exports = ShipFactory;