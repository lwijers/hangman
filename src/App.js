import React, { Component } from 'react';
import './App.css';
import WordComponent from "./components/WordComponent"
import NGComponent from './components/NGComponent'
import UIComponent from './components/UIComponent'
import GuessCountComponent from './components/GuessCountComponent'
import TriedLettersComp from './components/TriedLettersComp'
import PropTypes from 'prop-types'
import {wrongGuessLimit, isWinner} from './lib/game'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    mysteryWord: PropTypes.string.isRequired,
    triedLetters: PropTypes.array.isRequired
  }

  render() {
    const {mysteryWord, triedLetters} = this.props
    console.log(wrongGuessLimit(mysteryWord, triedLetters));
    return (

      <div className="App">
        <div>

          <NGComponent/>

          <WordComponent />

          <UIComponent/>

          <TriedLettersComp/>

          <GuessCountComponent/>

          <div className="checkLose">
            {wrongGuessLimit(mysteryWord, triedLetters) &&
              <p id="lose">
                "you Lose!"
              </p>}
          </div>

          <div className="checkWin">
            {isWinner(mysteryWord, triedLetters) &&
              <p id="win">
                "You win the game!"
              </p>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    mysteryWord: reduxState.mysteryWord,
    triedLetters: reduxState.triedLetters
  }
}

export default connect(mapStateToProps)(App)
