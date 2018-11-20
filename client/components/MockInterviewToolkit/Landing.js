import React, { Component } from 'react';
import axios from 'axios';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      incorrect: false,
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogin = (e) => {
    e.preventDefault();
    let { username, password } = this.state;
    let { updateUsername } = this.props;
    this.setState({ username: '', password: '' });
    let query = {
      params: {
        password,
      }
    }

    axios
      .get('/api/mockInterview/auth', query)
      .then(({ data }) => {
        if (data === 'success') {
          updateUsername(username);
        } else {
          this.setState({ incorrect: true });
        }
      })
      .catch(() => console.error('failed'))
  }

  render() {
    let { username, password, incorrect } = this.state;
    return (
      <div>
        Landing

        <form action="" onSubmit={this.handleLogin}>
          <input type="text" name="username" value={username} placeholder="username" onChange={this.handleChange}/>
          <input type="text" name="password" value={password} placeholder="password" onChange={this.handleChange}/>
          <button type="submit">Login</button>
        </form>
        {incorrect && <div>Invalid username/password</div>}
      </div>
    )
  }
}

export default Landing;