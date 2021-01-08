import React, { Component } from 'react'

import './App.css';
import { sample, indexOf } from 'lodash'

export default class App extends Component {
  state = {
    isGenerated: false
  }

  _generateTable() {
    var cards = ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'black', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'wildcard']
    var gameTable = []

    while(gameTable.length <= 25) {
      var x = sample(cards)
      cards.splice(indexOf(cards, x), 1)
      gameTable.push(x)
    }

    const firstRow = [gameTable[0], gameTable[1], gameTable[2], gameTable[3], gameTable[4]]
    const secondRow = [gameTable[5], gameTable[6], gameTable[7], gameTable[8], gameTable[9]]
    const thirdRow = [gameTable[10], gameTable[11], gameTable[12], gameTable[13], gameTable[14]]
    const fourthRow = [gameTable[15], gameTable[16], gameTable[17], gameTable[18], gameTable[19]]
    const fifthRow = [gameTable[20], gameTable[21], gameTable[22], gameTable[23], gameTable[24]]

    this.setState({
      firstRow: firstRow,
      secondRow: secondRow,
      thirdRow: thirdRow,
      fourthRow: fourthRow,
      fifthRow: fifthRow,
      isGenerated: true
    })
  }

  render() {
    var { firstRow, secondRow, thirdRow, fourthRow, fifthRow } = this.state
    return (
      <div className="container">
        <h1>Codenames Generator</h1>
          {
            !this.state.isGenerated ?
            <div />
            :
            <table className="table">
              <tr>
                {
                  firstRow.map((item, index) => {
                    return (
                      <td key={index} className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>
                {
                  secondRow.map((item, index) => {
                    return (
                      <td key={index} className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>
                {
                  thirdRow.map((item, index) => {
                    return (
                      <td key={index} className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>
                {
                  fourthRow.map((item, index) => {
                    return (
                      <td key={index} className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
              <tr>

                {
                  fifthRow.map((item, index) => {
                    return (
                      <td key={index} className={`cell ${item}`}></td>
                    )
                  })
                }
              </tr>
            </table>
          }
          <div className="generate-button">
            <button className="btn btn-lg btn-light" onClick={() => this._generateTable()}>Generate Table</button>
          </div>
          <div className="footer">
            <small>Made with :acheart: by Pengi</small>
          </div>
      </div>
    );
  }
}
