import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router';

import Navbar from './Nav';
import Stats from './Stats';
import CreationLab from './CreationLab';
import Session from './Session';

class ProtectedRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    let { history } = this.props;
    axios
      .get('/api/mockInterview/main/')
      .then(({ data }) => console.log(data))
      .catch((err) => { 
        console.error(err);
        history.push('/mockInterview');
      });
  }

  render() {
    let { match } = this.props;
    return (
      <div>
        <Navbar match={match}/>
        <Route path={`${match.path}/home`} component={Stats}/>
        <Route path={`${match.path}/create`} component={CreationLab}/>
        <Route path={`${match.path}/session`} component={Session}/>
      </div>
    )
  }
}

export default ProtectedRoutes;