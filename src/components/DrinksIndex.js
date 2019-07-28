import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class DrinksIndex extends Component {
  constructor() {
    super()

    this.state = {
      drinks: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick( value ) {
    console.log( 'selected: ', value )
    this.props.history.push(`/drink/${value}`)
  }

  render() {
    const { drinks } = this.props
    if (!drinks) return null
    return (
      <div>
        <ul>
          {
            drinks.map(drink => (
              <li
                key={drink.id}
                onClick={() => this.handleClick(drink.id)}>
                {drink.name}
                <figure>
                  <img src={drink.image} alt={drink.name} />
                </figure>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(DrinksIndex)
