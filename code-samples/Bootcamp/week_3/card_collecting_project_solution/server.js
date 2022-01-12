const express = require('express')
const { Collector, Card } = require('./models/index')
const app = express()
const PORT = 3000

const seed = require('./seed')

//to expose req.body to our server
app.use(express.json());

//seed your data
seed()
// A route that will retrieve all cards in our database
app.get('/cards', async (req,res) => {
    let allCards = await Card.findAll()
    res.send(allCards)
})

// A route that will retrieve one specific card from your database
app.get('/cards/:cardId', async (req, res) => {
    let cardId = req.params.cardId
    let card = await Card.findByPk(cardId)

    res.send(card)
})

// A route that will retrieve all collectors
app.get('/collectors', async (req,res) => {
    let allCollectors = await Collector.findAll()
    res.send(allCollectors)
})

// A route that will retrieve a collector
app.get('/collectors/:collectorId', async (req,res) => {
    let collectorId = req.params.collectorId
    let collector = await Collector.findByPk(collectorId)

    res.send(collector)
})

// A route that will add a card/user to our database
app.post('/cards', async (req, res) => {
    let newCard = req.body
    await Card.create(newCard)
    res.send(newCard)
})

app.post('/collectors', async (req, res) => {
    let newUser = req.body
    await Collector.create(newUser)
    res.send(newUser)
})
// A route that will delete a card/user in our database
app.delete('/cards/:cardId', async (req, res) => {
    let cardId = req.params.cardId
    let cardToDestroy = await Card.findByPk(cardId)
    await cardToDestroy.destroy()
    res.send(`card successfuly destroyed`)
})

app.delete('/collectors/:collectorId', async (req, res) => {
    let collectorId = req.params.collectorId
    let collectorToDestroy = await Collector.findByPk(collectorId)
    await collectorToDestroy.destroy()
    res.send(`collector successfuly destroyed`)
})

//A route that will generate a ‘pack of 5’ of cards for the collector.
app.put('/buy/:userId', async (req, res) => {
    const randomCards = {}
    const userId = req.params.userId
    const collector = await Collector.findByPk(userId)
    let counter = 0

    while(counter < 5) {
        //get a random number between 1-10
        let randomNum = Math.floor(Math.random() * 10)

        //if we draw the same card
        if(randomCards[randomNum] || randomNum === 0) continue
        else{
            //get the card id from the database
            let drawnCard = await Card.findByPk(randomNum)
            //check to make sure that no one else owns the card
            if(!drawnCard.dataValues.CollectorId) {
                //we update the Collector id of that specific card
                Card.update({CollectorId: collector.dataValues.id},{
                    where: {id: randomNum}
                })
            }
            randomCards[randomNum] = drawnCard.dataValues.id
            counter++
        }
    }
    
    res.send(randomCards)
    //add error handling
})

//A route that can ‘buy’ a card. If a card is bought, it will charge the collector
app.put('/cards/:cardId/:userId', async (req, res) => {
    let userId = req.params.userId
    let cardId = req.params.cardId

    //get card and user from table 
    let card = await Card.findByPk(cardId)
    let user = await Collector.findByPk(userId)

    //if no one has claimed this card
    if(!card.dataValues.CollectorId) {
        //update the card with the new collector
        await Card.update({CollectorId: user.dataValues.id}, {
            where: {id: cardId}
        })
        //charge the collector [make sure they've got enough money!]
        let newBudget = user.dataValues.budget - card.dataValues.price
        if(newBudget > 0) {
            //update the User's budget
            await Collector.update({budget: newBudget}, {
                where: {id: userId}
            })
        }
    }
    res.send(user)
})


//A route that will ‘sell’ a specific card. That card will be 'replenished' into the bank of available cards. The collector should gain money by ‘selling’ a card.
app.put('/:userId/cards/:cardId', async (req, res) => {
    let cardId = req.params.cardId
    let userId = req.params.userId
    //find the card and user
    let card = await Card.findByPk(cardId)
    let user = await Collector.findByPk(userId)
    //disassociate the CollectorId from the card only if there is an existing user 
    if(card.dataValues.CollectorId) {
        await Card.update({CollectorId: null}, {
            where: {id: cardId}
        })
        //get the amount that the card is worth
        let cardValue = card.dataValues.price
        //add the value back to the user
        await Collector.update({budget: user.dataValues.budget + cardValue}, {
            where: {id: userId}
        })
    } 
    res.send(user)
})

//A route that can ‘trade’ a card.
app.put('/users/:userId/cards/:cardId/traders/:traderId/:tradeCardId', async (req, res) => {
    let userId = req.params.userId
    let cardId = req.params.cardId
    let traderId = req.params.traderId
    let tradeCardId = req.params.tradeCardId

    let card = await Card.findByPk(cardId)
    let user = await Collector.findByPk(userId)
    let trader = await Collector.findByPk(traderId)
    let traderCard = await Card.findByPk(tradeCardId)

    //check if cards has a user associated to them
    if(card.dataValues.CollectorId && traderCard.dataValues.CollectorId) {
        //swap ids for each card
        await Card.update({CollectorId: userId}, {
            where: {id: traderId}
        })
        await Card.update({CollectorId: traderId}, {
            where: {id: userId}
        })
    }

    res.send(card)
    
})

app.listen(PORT, () => {
    console.log(`your server is now listening to port ${PORT}`)
})