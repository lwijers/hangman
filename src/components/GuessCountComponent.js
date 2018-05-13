import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class GuessCountComponent extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired
  }


  render() {
    const {count} = this.props
    return (
      <p>Guess Count: {count}/6</p>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return {
    count: reduxState.guessCount
  }
}


export default connect(mapStateToProps)(GuessCountComponent)
