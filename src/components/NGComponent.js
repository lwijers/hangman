import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/gameActions'
import {randomWord} from '../lib/game'


export class NGComponent extends PureComponent {

  handleClick = () => {
    this.props.newGame(randomWord())
  }


  render() {
    return (
      <button
        onClick={this.handleClick}
        className="NGButt"
      >
        New Game
      </button>
    )
  }
}

export default connect(null, { newGame })(NGComponent)
