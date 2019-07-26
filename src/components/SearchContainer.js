import React, { Fragment, Component } from 'react'

import SearchInput from './SearchInput'
import Button from './Button'
import DrinksIndex from './DrinksIndex'

class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      inputValue: ''
    }

    // setInterval(() => {
    //   this.setState({ inputValue: Math.random() })
    // }, 3000)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this.state.inputValue)
  }

  render() {
    const { inputValue } = this.state
    return (
      <Fragment>
        <div>
          <SearchInput
            onChange={value => this.setState({ inputValue: value })}
            inputValue={inputValue}
          />
          <Button
            onClick={this.handleClick}
          />
        </div>
        <div>
          {this.state.destinations &&
            <DrinksIndex drinks={this.state.drinks} />
          }
        </div>
      </Fragment>
    )
  }
}

export default SearchContainer
