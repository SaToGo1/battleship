const ShipFactory = require("../ship")

describe('Ship', () => {

    it('Ship initialization', () => {
        let ship1 = ShipFactory(2);
        let ship2 = ShipFactory(4, 4);
        expect(ship1.getLength()).toBe(2);
        expect(ship1.getNumberHits()).toBe(0);

        expect(ship2.getLength()).toBe(4);
        expect(ship2.getNumberHits()).toBe(4);

    })

    it('Ship.hit()', () => {
        let ship1 = ShipFactory(2);
        ship1.hit();
        expect(ship1.getNumberHits()).toBe(1);
    })

    it('Ship.isSunk()', () => {
        let ship1 = ShipFactory(2, 0);
        let ship2 = ShipFactory(2, 2);
        let ship3 = ShipFactory(2, 3);
        expect(ship1.isSunk()).toBe(false);
        expect(ship2.isSunk()).toBe(true);
        expect(ship3.isSunk()).toBe(true);
    })
})