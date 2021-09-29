const Airport = require('./Airport')
const Plane = require('./Plane')
const Bag = require('./Bag')
const Person = require('./Person')


describe('Airport object', () => {
	const testAirport = new Airport('JFK')
	const testPlane = new Plane('912')
	const testBag = new Bag(70)
	const testPerson = new Person('Shafee')

	
	test('airport has a name', () => {
		expect(testAirport.name).toBe('JFK')
	})

	test('airport has planes', () => {
		testAirport.addPlane(testPlane)
		expect(testAirport.planes.length).toBe(1)
	})

	test('airport can have planes with passengers with bags', () => {
		//add a bag to a passenger
		testPerson.addBag(testBag)
		//add this passenger to the plane
		testPlane.addPassenger(testPerson) //
		//add the plane to the airport
		testAirport.addPlane(testPlane) //[plane[passenger[bag]]]

		//plane exists with a passenger that has a bag ***
		expect(testAirport.planes[0].passengers[0].bags[0].weight).toBe(70)
	})
})