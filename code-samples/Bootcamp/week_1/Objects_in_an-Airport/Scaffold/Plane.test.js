const Person = require('./Person')
const Plane = require('./Plane')

describe('Plane class', () => {
    const passenger = new Person('Bobby')
    const newPlane = new Plane('Delta')

    test('Plane has name', () => {
        expect(newPlane.name).toBe('Delta')
    })

    test('Plane has origin and destination', () => {
        newPlane.setOrigin('Cairo')
        newPlane.setDestination('Halifax')

        expect(newPlane.origin).toBe('Cairo')
        expect(newPlane.destination).toBe('Halifax')
    })

    test('Plane can add passengers', () => {
        newPlane.addPassenger(passenger)
        expect(newPlane.passengers.length).toBe(1)
    })
})