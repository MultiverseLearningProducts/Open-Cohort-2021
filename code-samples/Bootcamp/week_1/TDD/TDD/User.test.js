const User = require('./User')

//Write tests in suites -> each suite should test for a certain grouping

describe('User Class Datatypes', () => {
    //username is of type string
    test('username should be of type string', () => {
        //create an instance of the class
        const testUser = new User('56789', 'thisIsAPassword', 'cohort@gmail.com', 30)
        // testUser = {
        //     username: 'openCohort123',
        //     password: 'thisIsAPassword',
        //     email: 'cohort@gmail.com',
        //     age: 30
        // }
        //expect ->
        expect(typeof testUser.username).toBe('string')
    })

    //password string
    test('password should be of type string', () => {
        //create an instance of the class
        const testUser2 = new User('testUser2', 'thisIsAPassword', 'cohort@gmail.com', 28)

        expect(typeof testUser2['password']).toBe('string')
    })

    //email string
    test('email should be of type string', () => {
        //create an instance of the class
        const testUser3 = new User('testUser2', 'thisIsAPassword', 'cohort@gmail.com', 28)

        expect(typeof testUser3['email']).toBe('string')
    })

    //age number
    test('age should be of type number', () => {
        //create an instance of the class
        const testUser3 = new User('testUser2', 'thisIsAPassword', 'cohort@gmail.com', 28)

        expect(typeof testUser3['age']).toBe('number')
    })

    //favoriteTech
    test('favoriteTech should be of type Array', () => {
        //create an instance of the class
        const testUser4 = new User('testUser4', 'thisIsAPassword', 'cohort@gmail.com', 28)

        expect(Array.isArray(testUser4['favoriteTech'])).toBe(true)
    })
})



describe('User methods testing Suite', () => {
 //how to access methods within a class? -> 
})