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
    var firstTeam = null;

    if (this.state.pickRandomStart) {
      // Pick first team and push to cards array
      firstTeam = pick(MersenneTwister19937.autoSeed(), ['red', 'blue']);
      cards.push(firstTeam);
    } else {
      // Just push wildcard to cards array
      cards.push('wildcard');
    }

    // Pick and push cards to game table
    var gameTable = new Array(5);
    for (var i = 0; i < 5; i++) {
      gameTable[i] = new Array(5);
      for (var j = 0; j < 5; j++) {
        var x = sample(cards);
        cards.splice(indexOf(cards, x), 1);
        gameTable[i][j] = x;
      }
    }

    // Set state for display
    this.setState({
      gameTable: gameTable,
      isGenerated: true,
      firstTeam: firstTeam,
    });
  }

  render() {
    var { gameTable, firstTeam, pickRandomStart } = this.state;
    return (
      <div className="bg-blue-900 min-h-screen min-v-screen flex flex-col mx-auto my-auto px-4 pb-3 text-center">
        <p className="text-white text-3xl md:text-4xl font-semibold my-10">
          Codenames Generator
        </p>
        {this.state.isGenerated && (
          <div className="flex flex-col">
            <table>
              <tbody>
                {gameTable.map((row, index) => {
                  return (
                    <tr key={index}>
                      {row.map((item, index) => {
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
                  );
                })}
              </tbody>
            </table>
            {firstTeam && (
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
            )}
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
