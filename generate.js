const _ = require('lodash')
const ConsoleGrid = require('console-grid')

var cards = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'wildcard']
var gameTable = []

var usingCards = cards

while (gameTable.length <= 25) {
  var x = _.sample(usingCards)
  usingCards.splice(_.indexOf(usingCards, x), 1)
  gameTable.push(x)
}

console.log(`Order is ${gameTable}`)