import React, { Component } from 'react';
import { sample, indexOf } from 'lodash';
import { MersenneTwister19937, pick } from 'random-js';

export default class App extends Component {
  state = {
    isGenerated: false,
    pickRandomStart: true,
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
    var firstTeam;

    if (this.state.pickRandomStart) {
      // Pick first team and push to cards array
      firstTeam = pick(MersenneTwister19937.autoSeed(), ['red', 'blue']);
      cards.push(firstTeam);
    } else {
      firstTeam = null;
      cards.push('wildcard');
    }

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
    var {
      firstRow,
      secondRow,
      thirdRow,
      fourthRow,
      fifthRow,
      firstTeam,
      pickRandomStart,
    } = this.state;
    return (
      <div className="bg-blue-900 min-h-screen min-v-screen flex flex-col mx-auto my-auto px-4 pb-3 text-center">
        <p className="text-white text-3xl md:text-4xl font-semibold my-10">
          Codenames Generator
        </p>
        {!this.state.isGenerated ? (
          <div />
        ) : (
          <div className="flex flex-col">
            <table>
              <tbody>
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
              </tbody>
            </table>
            {firstTeam !== null ? (
              <div className="flex flex-col mt-5">
                <div className="text-white font-bold text-sm uppercase">
                  {firstTeam} starts!
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td className="p-5 md:p-7 lg:p-10"></td>
                      <td className="p-5 md:p-7 lg:p-10"></td>
                      <td
                        className={`
                        ${
                          firstTeam === 'blue'
                            ? `bg-royalBlue-700`
                            : `bg-red-600`
                        }
                        border border-black p-5 md:p-7 lg:p-10
                      `}
                      ></td>
                      <td className="p-5 md:p-7 lg:p-10"></td>
                      <td className="p-5 md:p-7 lg:p-10"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : null}
            <div className="flex flex-col mt-5">
              <table>
                <tbody>
                  <tr>
                    <td className="px-5 md:px-7 lg:px-10 text-white uppercase text-sm font-bold">
                      Blue Agents
                    </td>
                    <td className="px-5 md:px-7 lg:px-10 text-white uppercase text-sm font-bold">
                      Red Agents
                    </td>
                    <td className="px-5 md:px-7 lg:px-10 text-white uppercase text-sm font-bold">
                      Bystanders
                    </td>
                    <td className="px-5 md:px-7 lg:px-10 text-white uppercase text-sm font-bold">
                      Assassin
                    </td>
                  </tr>
                  <tr>
                    <td className="p-5 md:p-7 lg:p-10 bg-royalBlue-700 border border-black"></td>
                    <td className="p-5 md:p-7 lg:p-10 bg-red-600 border border-black"></td>
                    <td className="p-5 md:p-7 lg:p-10 bg-white border border-black"></td>
                    <td className="p-5 md:p-7 lg:p-10 bg-black border border-black"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="mt-4">
          <button
            className="h-12 px-6 m-2 font-medium text-lg bg-white text-gray-800 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-gray-200"
            onClick={() => this._generateTable()}
          >
            Generate Board
          </button>
        </div>
        <div className="mb-4 mt-2">
          <label
            htmlFor="pickRandomTeam"
            className="mx-2 text-white uppercase text-sm font-bold"
          >
            Randomly Pick First Team
          </label>
          <input
            type="checkbox"
            name="pickRandomTeam"
            id="pickRandomTeam"
            onChange={() =>
              this.setState({
                pickRandomStart: !pickRandomStart,
              })
            }
            checked={pickRandomStart}
            className="cursor-pointer"
          />
        </div>
        <p className="text-xs text-gray-500">Made with :acheart: by Pengi</p>
      </div>
    );
  }
}
