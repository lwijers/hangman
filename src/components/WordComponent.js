import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {showGuess} from '../lib/game'


class WordComponent extends PureComponent {


  static propTypes = {
    mysteryWord: PropTypes.string.isRequired,
    triedLetters: PropTypes.array.isRequired
  }

  render() {
    const {mysteryWord, triedLetters} = this.props
    return (
      <p className="Word">guess the word: {showGuess(mysteryWord, triedLetters)}</p>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return {
    mysteryWord: reduxState.mysteryWord,
    triedLetters: reduxState.triedLetters

  }
}

export default connect(mapStateToProps)(WordComponent)
