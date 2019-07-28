import React, { Component } from 'react'

class Button extends Component {
  constructor() {
    super()
    this.state = {}
  }

  handleClick() {

  }
// so the <button> below is the html button, while the component Button component renders this button. The component is also responsible
  render() {
    return (
      <button
        onClick={this.handleClick}>
        Search
      </button>
    )
  }
}

export default Button
