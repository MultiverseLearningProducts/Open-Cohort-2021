//import database + models
const { db } = require('./db')

//import our models from the file where we've created the associations
const { Game, User } = require('./index')


//write our test suite
describe('Videogame collection database', () => {

    //clear out our database
    //beforeAll() <- a jest method that will run something before we invoke any tests
    //we dont know how long its going to take to 
    beforeAll(async () => {
        await db.sync({
            force: true //clears out all entries in all of our tables in our db
        })
    })

    //make sure that we can create entries in our tables (rows)
    test('can create a game', async () => {
        //create a row in the Game table
        //.create
        const testGame = await Game.create({ name: 'Final Fantasy', platform: 'PS1'})
        const testGame2 = await Game.create({ name: 'Breath of Wild', platform: 'Switch'})

        expect(testGame.name).toBe('Final Fantasy')
        expect(testGame.platform).toBe('PS1')
    })

})