const Bag = require('./Bag')
const Person = require('./Person')

describe('Person class', () => {
    const newBag = new Bag(25)
    const newPerson = new Person('Aleyda')

    test('Person has name', () => {
        expect(newPerson['name']).toBe('Aleyda')
    })

    test('Person has bag', () =>{
        newPerson.addBag(newBag)
        expect(newPerson.bags.length).toBe(1)
    })
})