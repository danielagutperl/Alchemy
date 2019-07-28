import React, { Component } from 'react'
import axios from 'axios'
import Auth from './Auth'

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
              <label>Drink Name</label>
              <div>
                <input
                  name="name"
                  placeholder="Drink name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
            </div>
            <div>
              <label>Image Url</label>
              <div>
                <input
                  name="image"
                  placeholder="Image Url"
                  onChange={this.handleChange}
                  value={this.state.image}
                />
              </div>
            </div>
            <div>
              <label>Ingredients</label>
              <div>
                <input
                  type="textarea"
                  name="ingredients"
                  placeholder="List of ingredients"
                  onChange={this.handleChange}
                  value={this.state.ingredients}
                />
              </div>
            </div>
            <div>
              <label>Recipe</label>
              <div>
                <input
                  type="textarea"
                  name="recipe"
                  placeholder="Recipe"
                  onChange={this.handleChange}
                  value={this.state.recipe}
                />
              </div>
            </div>
            <button
              onClick={this.handleSubmit}
            >Submit
            </button>
          </div>
        </div>
      </section>
    )
  }
}

export default DrinkNew
