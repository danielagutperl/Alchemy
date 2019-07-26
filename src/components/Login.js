import React from 'react'
import axios from 'axios'
import Auth from './Auth'

class Login extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value }}) {
    // const data = {...this.state.data, [name]: value }
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    // e.preventDefault() not required unless type submit button
    axios.post('http://localhost:5000/api/login', this.state)
      .then(res => {
        debugger
        Auth.setToken(res.data.token)
        this.props.history.push('/dinosaurs')
      })
      .catch((err) => {
        console.log(err)
        this.setState({ error: 'Invalid Crendentials'});
      })
  }

  render(){
    return (
      <section>
        <div>
          <h2>Login</h2>
          <div>
            <label>Email</label>
            <div>
              <input
                // error for if not login or wrong
                name="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
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
            {
            // if error &&
            }
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
