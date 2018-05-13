import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createGame } from '../actions/gameActions'
import PropTypes from 'prop-types'


export class NGComponent extends PureComponent {
  static propTypes = {
    createGame: PropTypes.func.isRequired
  }

  handleClick = () => {
    this.props.createGame()
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

export default connect(null, { createGame })(NGComponent)
