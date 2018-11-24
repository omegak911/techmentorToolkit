import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Context from './Context';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  updateUsername = (username) => {
    this.setState({ username });
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          updateUsername: this.updateUsername
        }} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default withRouter(Provider);