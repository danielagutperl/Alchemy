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

  addDefaultSrc = (ev) => {
    ev.target.src = '/assets/drinks-jars.jpg'
  }

  render() {
    const { drinks } = this.props
    if (!drinks) return null
    return (
      <div className="drink-results">
        <ul>
          {
            drinks.map(drink => (
              <li
                key={drink.id}
                onClick={() => this.handleClick(drink.id)}>
                <div className="drink">
                  <div>
                    {drink.name}
                    <div className="drink-ingredients">
                      {drink.ingredients}
                    </div>
                  </div>
                  <img
                    src="/images/test.jpg"
                    alt=""
                    title={drink.name}
                    onError={this.addDefaultSrc}
                  />
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(DrinksIndex)
