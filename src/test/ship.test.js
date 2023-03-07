const Ship = require("../ship")

test('Ship initialization', () => {
    let ship1 = new Ship(2);
    let ship2 = new Ship(4, 4);
    expect(ship1.length).toBe(2);
    expect(ship1.numberHits).toBe(0);

    expect(ship2.length).toBe(4);
    expect(ship2.numberHits).toBe(4);

})

test('Ship Hit', () => {
    let ship1 = new Ship(2);
    ship1.hit();
    expect(ship1.numberHits).toBe(1);
})

test('Ship sunk', () => {
    let ship1 = new Ship(2, 0);
    let ship2 = new Ship(2, 2);
    expect(ship1.isSunk()).toBe(false);
    expect(ship2.isSunk()).toBe(true);
})