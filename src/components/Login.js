import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Auth from './Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      error: undefined
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    // const data = {...this.state.data, [name]: value }
    this.setState({ [name]: value })
  }

  handleSubmit() {

    axios.post('http://localhost:5000/api/login', this.state)
      .then(res => {
        Auth.setToken(res.data.token)
        Auth.setUserName(res.data.username)
        this.props.history.push('/drinks')
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: 'Invalid Crendentials'})
      })
  }

  render(){
    return (
      <section>
        <div>
          <h2>Login</h2>
          <div>
            <TextField
              id="email"
              label="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              margin="normal"
            />
          </div>
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
          <button
            onClick={this.handleSubmit}
          >Login
          </button>
        </div>
      </section>
    )
  }
}

export default Login
