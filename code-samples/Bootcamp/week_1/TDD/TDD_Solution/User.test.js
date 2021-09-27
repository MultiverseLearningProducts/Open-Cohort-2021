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
    test('age returns true if between 18 to 75' , () => {
        //user instance
        const methodTestUser = new User('methodTestUser', 'thisIsAPassword', 'cohort@gmail.com', 28)
        const methodTestUser2 = new User('methodTestUser2', 'thisIsAPassword', 'cohort@gmail.com', 300)

        expect(methodTestUser.checkAge()).toBe(true)
        expect(methodTestUser2.checkAge()).toBe(false)
    })

    test('addTech pushes new technologies to favoriteTech array' , () => {
        const methodTestUser3 = new User('methodTestUser3', 'thisIsAPassword', 'cohort@gmail.com', 28)
        methodTestUser3.addTech('Python')
        methodTestUser3.addTech('Julia')
        methodTestUser3.addTech('TypeScript')

        expect(methodTestUser3['favoriteTech'].length).toBe(3)
    })
    
    test('email should validate with @gmail.com at the end', () => {
        const methodTestUser4 = new User('methodTestUser4', 'thisIsAPassword', 'cohort@gmail.com', 28)

        expect(methodTestUser4.validateEmail()).toBe(true)
    })
})