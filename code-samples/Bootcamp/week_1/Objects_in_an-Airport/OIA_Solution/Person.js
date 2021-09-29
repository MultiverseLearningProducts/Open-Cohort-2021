class Person {
    constructor(name, bags) {
        this.name = name
        this.bags = [] 
    }

    //include an addBag method
    addBag(bag) {
        this.bags.push(bag)
    }
}

module.exports = Person