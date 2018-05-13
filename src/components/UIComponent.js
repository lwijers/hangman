import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'


export class UIComponent extends PureComponent {
  // static propTypes = {
  // : PropTypes.string.isRequired
  // }


  render() {
    // const {word} = this.props
    return (
      <form>
        <div>
          <label>Choose a single letter</label>
          <input type="text" name="letter"
            placeholder="lower case, one letter"/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default connect()(UIComponent)
