import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {wrongGuessCount} from '../lib/game'

class GuessCountComponent extends PureComponent {
  static propTypes = {
    guesses: PropTypes.guesses,
    word: PropTypes.guesses
  }


  render() {
    const {guesses, word} = this.props
    return (
      <p>guesses left: {6 - wrongGuessCount(word, guesses)}/6</p>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return {
    guesses: reduxState.triedLetters,
    word: reduxState.mysteryWord
  }
}


export default connect(mapStateToProps)(GuessCountComponent)
