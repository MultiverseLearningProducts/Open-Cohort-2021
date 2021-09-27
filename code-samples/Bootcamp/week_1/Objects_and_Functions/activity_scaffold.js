class Person {
    constructor(name) {
        //name property + parents (what kind of datatype)
    }

    childOf() {
        //what if the person doesn't know their parent? Add a conditional statement
        //if(parentExists){
            //return a string that includes both parents
        //}
        //else{
            //return another statement
        //}
    }

    addParent(parent) {
        //think about the datatype of the parents property and then apply a method to it
    }
}
//Add more parents + children
let Marge = new Person('Marge')

let Lisa = new Person('Lisa')
Lisa.addParent(Marge)

console.log(Lisa.childOf())
