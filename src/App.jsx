import React, { Component } from 'react';
import { sample, indexOf } from 'lodash';
import { MersenneTwister19937, pick } from 'random-js';

export default class App extends Component {
  state = {
    isGenerated: false,
  };

  _generateTable() {
    // Array of Cards without first team
    var cards = [
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'red',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'blue',
      'black',
      'white',
      'white',
      'white',
      'white',
      'white',
      'white',
      'white',
    ];

    // Pick first team and push to cards array
    const firstTeam = pick(MersenneTwister19937.autoSeed(), ['red', 'blue']);
    cards.push(firstTeam);

    // Pick and push cards to game table
    var gameTable = [];
    while (gameTable.length <= 25) {
      var x = sample(cards);
      cards.splice(indexOf(cards, x), 1);
      gameTable.push(x);
    }

    const firstRow = [
      gameTable[0],
      gameTable[1],
      gameTable[2],
      gameTable[3],
      gameTable[4],
    ];
    const secondRow = [
      gameTable[5],
      gameTable[6],
      gameTable[7],
      gameTable[8],
      gameTable[9],
    ];
    const thirdRow = [
      gameTable[10],
      gameTable[11],
      gameTable[12],
      gameTable[13],
      gameTable[14],
    ];
    const fourthRow = [
      gameTable[15],
      gameTable[16],
      gameTable[17],
      gameTable[18],
      gameTable[19],
    ];
    const fifthRow = [
      gameTable[20],
      gameTable[21],
      gameTable[22],
      gameTable[23],
      gameTable[24],
    ];

    // Set state for display
    this.setState({
      firstRow: firstRow,
      secondRow: secondRow,
      thirdRow: thirdRow,
      fourthRow: fourthRow,
      fifthRow: fifthRow,
      isGenerated: true,
      firstTeam: firstTeam,
    });
  }

  render() {
    var { firstRow, secondRow, thirdRow, fourthRow, fifthRow, firstTeam } =
      this.state;
    return (
      <div className="bg-blue-900 min-h-screen min-v-screen flex flex-col mx-auto my-auto px-4 text-center">
        <p className="text-white text-3xl md:text-4xl font-semibold my-10">
          Codenames Generator
        </p>
        {!this.state.isGenerated ? (
          <div />
        ) : (
          <div className="flex flex-col">
            <table>
              <tr>
                {firstRow.map((item, index) => {
                  return (
                    <td
                      key={index}
                      className={`p-5 md:p-7 lg:p-10 border border-black ${
                        item === `red`
                          ? `bg-red-600`
                          : item === `blue`
                          ? `bg-royalBlue-700`
                          : item === `white`
                          ? `bg-white`
                          : item === `black`
                          ? `bg-black`
                          : `bg-lime-400`
                      }`}
                    ></td>
                  );
                })}
              </tr>
              <tr>
                {secondRow.map((item, index) => {
                  return (
                    <td
                      key={index}
                      className={`p-5 md:p-7 lg:p-10 border border-black ${
                        item === `red`
                          ? `bg-red-600`
                          : item === `blue`
                          ? `bg-royalBlue-700`
                          : item === `white`
                          ? `bg-white`
                          : item === `black`
                          ? `bg-black`
                          : `bg-lime-400`
                      }`}
                    ></td>
                  );
                })}
              </tr>
              <tr>
                {thirdRow.map((item, index) => {
                  return (
                    <td
                      key={index}
                      className={`p-5 md:p-7 lg:p-10 border border-black ${
                        item === `red`
                          ? `bg-red-600`
                          : item === `blue`
                          ? `bg-royalBlue-700`
                          : item === `white`
                          ? `bg-white`
                          : item === `black`
                          ? `bg-black`
                          : `bg-lime-400`
                      }`}
                    ></td>
                  );
                })}
              </tr>
              <tr>
                {fourthRow.map((item, index) => {
                  return (
                    <td
                      key={index}
                      className={`p-5 md:p-7 lg:p-10 border border-black ${
                        item === `red`
                          ? `bg-red-600`
                          : item === `blue`
                          ? `bg-royalBlue-700`
                          : item === `white`
                          ? `bg-white`
                          : item === `black`
                          ? `bg-black`
                          : `bg-lime-400`
                      }`}
                    ></td>
                  );
                })}
              </tr>
              <tr>
                {fifthRow.map((item, index) => {
                  return (
                    <td
                      key={index}
                      className={`p-5 md:p-7 lg:p-10 border border-black ${
                        item === `red`
                          ? `bg-red-600`
                          : item === `blue`
                          ? `bg-royalBlue-700`
                          : item === `white`
                          ? `bg-white`
                          : item === `black`
                          ? `bg-black`
                          : `bg-lime-400`
                      }`}
                    ></td>
                  );
                })}
              </tr>
            </table>
            <div className="flex flex-col my-5">
              <div className="text-white font-bold text-sm uppercase">
                {firstTeam} starts!
              </div>
              <table>
                <tr>
                  <td className="p-5 md:p-7 lg:p-10"></td>
                  <td className="p-5 md:p-7 lg:p-10"></td>
                  <td
                    className={`
                      ${
                        firstTeam === 'blue' ? `bg-royalBlue-700` : `bg-red-600`
                      }
                      border border-black p-5 md:p-7 lg:p-10
                    `}
                  ></td>
                  <td className="p-5 md:p-7 lg:p-10"></td>
                  <td className="p-5 md:p-7 lg:p-10"></td>
                </tr>
              </table>
            </div>
          </div>
        )}
        <div className="my-4">
          <button
            className="h-12 px-6 m-2 font-medium text-lg bg-white text-gray-800 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-gray-200"
            onClick={() => this._generateTable()}
          >
            Generate Board
          </button>
        </div>
        <p className="text-xs text-gray-500">Made with :acheart: by Pengi</p>
      </div>
    );
  }
}
