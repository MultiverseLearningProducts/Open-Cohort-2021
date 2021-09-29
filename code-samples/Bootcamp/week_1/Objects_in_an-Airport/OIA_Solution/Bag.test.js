const Bag = require('./Bag')

describe('Bag class', () => {

    //bag has weight
    test('bag has weight', () => {
        const testBag = new Bag(55)
        expect(testBag.weight).toBe(55)
    })
    //if bag has no weight, return error
    test('bag has no weight to return an error', () => {
        
        expect(() => new Bag()).toThrowError('bag needs weight')
    })
})