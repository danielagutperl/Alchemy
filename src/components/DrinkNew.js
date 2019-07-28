import React, { Component } from 'react'
import axios from 'axios'
import Auth from './Auth'
import TextField from '@material-ui/core/TextField'

class DrinkNew extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      image: '',
      ingredients: '',
      recipe: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value })
  }

  handleSubmit() {
    const data = {
      ...this.state,
      drink_creator: Auth.getUserName()
    }
    axios.post('http://localhost:5000/api/drinks', data, {
      headers: { 'Authorization': `${Auth.getToken()}` }
    })
      .then((res) => {
        this.props.history.push(`/drink/${res.data.id}`)
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: 'that didnt work!' })
      })
  }

  render() {
    console.log(this.state)
    return (
      <section>
        <div>
          <div>
            <h2>Mix a new drink</h2>
            <div>
              <TextField
                id="name"
                label="Drink Name"
                name="name"
                type="name"
                onChange={this.handleChange}
                value={this.state.name}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                id="image"
                label="Image Url"
                name="image"
                type="image"
                onChange={this.handleChange}
                value={this.state.image}
                margin="normal"
              />
            </div>
            <div>
              <TextField
                id="ingredients"
                label="Ingredients"
                name="ingredients"
                type="ingredients"
                multiline
                onChange={this.handleChange}
                value={this.state.ingredients}
                margin="normal"
              />
            </div>
          </div>
          <div>
            <TextField
              id="recipe"
              label="Recipe"
              name="recipe"
              type="recipe"
              multiline
              onChange={this.handleChange}
              value={this.state.recipe}
              margin="normal"
            />
          </div>
          <button
            onClick={this.handleSubmit}
          >Submit
          </button>
        </div>
      </section>
    )
  }
}

export default DrinkNew
