import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class TriedLettersComp extends PureComponent {
  static propTypes = {
    triedLetters: PropTypes.array.isRequired
  }


  render() {
    const {triedLetters} = this.props
    return (
      <p>tried letters: {triedLetters}</p>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return {
    triedLetters: reduxState.triedLetters
  }
}


export default connect(mapStateToProps)(TriedLettersComp)
