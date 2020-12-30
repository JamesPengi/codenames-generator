import React, { Component } from 'react'

import './App.css';
import { sample, indexOf } from 'lodash'

export default class App extends Component {
  state = {
    gameTable: [],
  }

  _generateTables() {
    var cards = ['red1', 'red2', 'red3', 'red4', 'red5', 'red6', 'red7', 'red8', 'blue1', 'blue2', 'blue3', 'blue4', 'blue5', 'blue6', 'blue7', 'blue8', 'black1', 'white1', 'white2', 'white3', 'white4', 'white5', 'white6', 'white7', 'wildcard1']
    var gameTable = []

    while(gameTable.length <= 25) {
      var x = sample(cards)
      cards.splice(indexOf(cards, x), 1)
      gameTable.push(x)
    }

    this.setState({
      gameTable: gameTable
    })
  }

  render() {
    var firstRow = [this.state.gameTable[0], this.state.gameTable[1], this.state.gameTable[2], this.state.gameTable[3], this.state.gameTable[4]]
    var secondRow = [this.state.gameTable[5], this.state.gameTable[6], this.state.gameTable[7], this.state.gameTable[8], this.state.gameTable[9]]
    var thirdRow = [this.state.gameTable[10], this.state.gameTable[11], this.state.gameTable[12], this.state.gameTable[13], this.state.gameTable[14]]
    var fourthRow = [this.state.gameTable[15], this.state.gameTable[16], this.state.gameTable[17], this.state.gameTable[18], this.state.gameTable[19]]
    var fifthRow = [this.state.gameTable[20], this.state.gameTable[21], this.state.gameTable[22], this.state.gameTable[23], this.state.gameTable[24]]

    return (
      <div className="container">
        <h1>Codenames Generator</h1>
          {
            this.state.gameTable.length === 0 ?
            <div />
            :
            <table className="table">
              <tr>
                {
                  firstRow.map((item, index) => {
                    return (
                      <td className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>
                {
                  secondRow.map((item, index) => {
                    return (
                      <td className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>
                {
                  thirdRow.map((item, index) => {
                    return (
                      <td className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>
                {
                  fourthRow.map((item, index) => {
                    return (
                      <td className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>
                {
                  fifthRow.map((item, index) => {
                    return (
                      <td className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
            </table>
          }
          <div className="generate-button">
            <button className="btn btn-lg btn-light" onClick={() => this._generateTables()}>Generate Table</button>
          </div>
      </div>
    );
  }
}
