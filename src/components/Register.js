import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  constructor() {
    super()

    this.state ={ data: {}, errors: {} }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = {...this.state.errors, [name]: ''}
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    console.log(this.state)
    return (
      <section >
        <div>
          <form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
            <div>
              <label>Username</label>
              <div>
                <input
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              {
              // err if no username
              }
            </div>
            <div>
              <label>Email</label>
              <div>
                <input
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              {
                // this.state.errors.email && message
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
                />
              </div>
            </div>
            <div>
              <label>Password Confirmation</label>
              <div>
                <input
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button
              type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    )
  }
}

export default Register
