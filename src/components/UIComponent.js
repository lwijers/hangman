import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/gameActions'


class UIComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {

    this.props.makeGuess(this.state.value)
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          maxLength="1"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Pick any letter"
        />
        <input type="submit" value="Make a Guess" />
      </form>
    )
  }
}

export default connect(null, { makeGuess })(UIComponent)
