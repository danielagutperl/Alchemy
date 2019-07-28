import React from 'react'
import axios from 'axios'

import TextField from '@material-ui/core/TextField'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    // const errors = {...this.state.errors, [name]: ''} - smart enough! Not needed!
    this.setState({ [name]: value })
  }

  handleSubmit() {
    axios.post('http://localhost:5000/api/register', this.state)
      .then(() => {
        this.props.history.push('/login')
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: 'that didnt work!' })
      })
  }

  render() {
    console.log(this.state)
    return (
      <section >
        <div>
          <h2>Register</h2>
          <div>
            <div>
              <TextField
                id="username"
                label="Username"
                name="username"
                type="username"
                onChange={this.handleChange}
                value={this.state.username}
                margin="normal"
              />
            </div>
          </div>
          <div>
            <div>
              <TextField
                id="email"
                label="Email Address"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
                margin="normal"
              />
            </div>
            {
            }
          </div>
          <div>
            <div>
              <TextField
                id="password"
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
          </div>
          <div>
            <div>
              <TextField
                id="password_confirmation"
                label="Password Confirmation"
                name="password_confirmation"
                type="password_confirmation"
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                margin="normal"
              />
            </div>
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

export default Register
