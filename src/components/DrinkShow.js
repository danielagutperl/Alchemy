import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Auth from './Auth'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'

class DrinkShow extends Component {
  constructor() {
    super()

    this.state = {
      drink: null,
      comment: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCommentDelete = this.handleCommentDelete.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  handleChange(e) {
    this.setState({ comment: e.target.value })
  }

  getData() {
    axios.get(`/api/drinks/${this.props.match.params.id}`)
      .then(res => this.setState({ drink: res.data }))
      .catch(err => console.log(err))
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault()
    const data = {
      comment_author: Auth.getUserName(),
      content: this.state.comment
    }
    axios.post(`http://localhost:5000/api/drinks/${this.props.match.params.id}/comments`, data, {
      headers: { 'Authorization': `${Auth.getToken()}`, 'Content-Type': 'application/json' }
    })
      .then(() => {
        this.getData()
      })
      .catch(err => console.log(err))
  }

  handleCommentDelete(comment) {
    axios.delete(`http://localhost:5000/api/drinks/${this.props.match.params.id}/comments/${comment.id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  handleDrinkDelete() {
    axios.delete(`http://localhost:5000/api/drink/${this.props.match.params.id}`, {
      headers: { 'Authorization': Auth.getToken() }
    })
      .then(() => {
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }


  render() {
    if (!this.state.drink) return null
    const { drink } = this.state

    console.log(this.state)
    const isDrinkOwner = drink.drink_creator === Auth.getUserName()
    console.log(isDrinkOwner)
    console.log(drink.drink_creator)
    console.log(Auth.getUserName())
    return (
      <section>
        <div>
          <Fragment>
            <h2>{drink.name}</h2>
            <hr />
            <div>
              <div>
                <figure className="show-image">
                  <img src={drink.image} alt={drink.name} />
                </figure>
              </div>
              <div>
                <h3>Ingredients</h3>
                <p>
                  {
                    drink.ingredients
                  }
                </p>
                {
                  // <ul>
                  //   {
                  //     drink.ingredients.map(ingredient => (
                  //       <li
                  //         key={ingredient.index}>
                  //         {drink.ingredient}
                  //       </li>
                  //     ))
                  //   }
                  // </ul>
                }
                <h3>Mixology</h3>
                <p>{drink.recipe}</p>
                {!!Auth.getUserName() && isDrinkOwner &&  <Button size="medium" variant="contained" color="secondary"
                  onClick={() => this.handleDrinkDelete()}
                >Delete Drink
                  <DeleteIcon />
                </Button>}
                <hr />
                <h2>Comments</h2>
              </div>
            </div>
            <hr />
            {drink.comments.map(comment => {
              const isCommentOwner = comment.comment_author === Auth.getUserName()
              return (
                <div key={comment.id}>
                  <div>
                    {comment.content} - {new Date(comment.created_at).toLocaleString()}
                  </div>
                  {isCommentOwner &&  <Fab size="small" aria-label="delete"
                    onClick={() => this.handleCommentDelete(comment)}
                  ><DeleteIcon />
                  </Fab>}



                </div>
              )
            })}
            {!Auth.isAuthorised() &&
            <p>To edit this drink or comment, please login!</p>}
            {Auth.isAuthorised() &&
            <form>
              <div>
                <TextField
                  id="comment"
                  label="Comment"
                  name="comment"
                  onChange={this.handleChange}
                  value={this.state.comment}
                  margin="normal"
                />
              </div>
              <Fab size="small" color="primary" aria-label="add" onClick={this.handleSubmit}><AddIcon /></Fab>
            </form>}
          </Fragment>

        </div>
      </section>
    )
  }
}

export default DrinkShow
