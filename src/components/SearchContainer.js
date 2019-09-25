import React, { Fragment, Component } from 'react'
import axios from 'axios'

import SearchInput from './SearchInput'
// import Button from './Button'
import DrinksIndex from './DrinksIndex'

import Button from '@material-ui/core/Button'


class SearchContainer extends Component {
  constructor() {
    super()
    this.state = {
      drinks: [],
      loading: false,
      inputValue: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { inputValue } = this.state
    axios.get('http://localhost:5000/api/drinks')
      .then(res => {
        const filteredDrinks = res.data.filter(drink => {
          return drink.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          || drink.ingredients.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        })
        this.setState({ drinks: filteredDrinks })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { drinks, inputValue } = this.state
    return (
      <Fragment>
        <div>
          <SearchInput
            onChange={value => this.setState({ inputValue: value })}
            inputValue={inputValue}
          />
          <Button variant="contained" size="large" color="primary"
            onClick={this.handleClick}>
            Search
          </Button>
        </div>
        <div>
          {drinks &&
            <DrinksIndex drinks={drinks} />
          }
        </div>
      </Fragment>
    )
  }
}

export default SearchContainer
