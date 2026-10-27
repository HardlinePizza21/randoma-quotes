const express = require('express')
const os = require("os")
const app = express()
const port = 80

const phrases = [
    'Life is what happens when you are busy making other plans.',
    'Success is the sum of small efforts, repeated day in and day out.',
    'Dream big and dare to fail.',
    'The future depends on what you do today.',
    'It always seems impossible until it is done.',
    'Happiness depends upon ourselves.',
    'Your time is limited, so don\'t waste it living someone else\'s life.'
]

app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * phrases.length)
    res.send(phrases[number] + " - Container id: " + os.hostname())
})

app.listen(port, () => {
    console.log(`App listening at port: ${port}`)
})