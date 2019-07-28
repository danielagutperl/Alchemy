import React from 'react'
import axios from 'axios'

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
            <label>Username</label>
            <div>
              <input
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={this.state.username}
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <div>
              <input
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
            {
            }
          </div>
          <div>
            <label>Password</label>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
          </div>
          <div>
            <label>Password Confirmation</label>
            <div>
              <input
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={this.state.upasswordConfirmation}
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
