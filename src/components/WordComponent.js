import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import randomWord from '../lib/game'
// import './Board.css'

export class WordComponent extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired
  }


  render() {
    const {word} = this.props
    return (
      <p className="Word">{word}</p>
    )
  }
}

export default connect()(WordComponent)
