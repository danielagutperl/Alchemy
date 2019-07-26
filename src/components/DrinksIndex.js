import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class DrinksIndex extends Component {
  constructor() {
    super()

    this.state = {
      drinks: null,
      selected: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick( e ) {
    // e.persist() - what does this do??
    console.log( 'selected: ', e )
    this.setState( { selected: e }, () => this.props.history.push(`/${this.props.searchType.toLowerCase()}/${this.state.selected}`))
  }

  // componentDidMount() {
  //   axios.get('/api/drinks')
  //     .then(res => this.setState({ drinks: res.data }))
  //     .catch(err => console.log(err))
  // }
  // index could be response from request using search result?

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
                {
                  // <Link to={`/drink/${drink._id}`}></Link>
                }
                {drink.name}{drink.id}
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

export default DrinksIndex
