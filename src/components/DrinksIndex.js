import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

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
    if (!drinks || drinks.length < 1) return null
    return (
      <>
      <Container className="material-container" maxWidth="sm" style={{ backgroundColor: 'white', opacity: 0.8, height: '100vh' }}>
        <div></div>
      </Container>
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
                    src={drink.image}
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
      </>
    )
  }
}

export default withRouter(DrinksIndex)
