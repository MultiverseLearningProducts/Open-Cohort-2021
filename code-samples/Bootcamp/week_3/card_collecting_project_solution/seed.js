const path = require('path')
const fs = require('fs').promises

const {db} = require('./db')
const { Card, Collector } = require('./models/index')

const seed = async () => {
    await db.sync({force: true})

    const cardSeedPath = path.join(__dirname, 'cards.json')
    const collectorSeedPath = path.join(__dirname, 'collectors.json')
 
    const cardBuffer = await fs.readFile(cardSeedPath)
    const collectorsBuffer = await fs.readFile(collectorSeedPath)

    const {cardData} = JSON.parse(String(cardBuffer))
    const {collectorData} = JSON.parse(String(collectorsBuffer))

   
    const cardPromises = cardData.map(card => { Card.create(card)})
    const collectorPromises = collectorData.map(collector => { Collector.create(collector)})

    await Promise.all(cardPromises)
    await Promise.all(collectorPromises)

    console.log(`cards and collectors sucessfully populated!`)
}

module.exports = seed