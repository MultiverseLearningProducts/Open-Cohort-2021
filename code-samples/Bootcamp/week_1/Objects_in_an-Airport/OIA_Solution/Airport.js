class Airport {
	constructor(name) {
		this.name = name
		this.planes = []//what would be the best datatype?
	}

	addPlane(plane) {
		//use an array method
		this.planes.push(plane)
	}
}

module.exports = Airport