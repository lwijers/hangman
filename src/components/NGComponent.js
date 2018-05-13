import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'


export class NGComponent extends PureComponent {
  // static propTypes = {
  //   word: PropTypes.string.isRequired
  // }


  render() {
    // const {word} = this.props
    return (
      <button className="NGButt">New Game</button>
    )
  }
}

export default connect()(NGComponent)
