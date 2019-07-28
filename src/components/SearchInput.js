import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

class SearchInput extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     inputValue: null
  //   }
  //   this.getInput = this.getInput.bind(this)
  // }

  // getInput({ target: { value } }) {
  //   // const inputValue = { ...this.state.inputValue, [name]: value }
  //   // this.setState(inputValue)
  //   const newState = { ...this.state, inputValue: value }
  //   this.setState(newState)
  // }

  // So without the function above that sets state, this Search input component now is onkly respopnsible for rendering the input box. I am saying pay attention to the thing I have called inputValue, and listen for onChange.
  render() {
    const { inputValue, onChange } = this.props
    return (
      <TextField
        id="search_input"
        label="Search Drinks"
        name="search_input"
        type="search_input"
        onChange={e => onChange(e.target.value)}
        value={inputValue}
        margin="normal"
      />
    )
  }
}

SearchInput.defaultProps = {
  inputValue: ''
}

SearchInput.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default SearchInput
