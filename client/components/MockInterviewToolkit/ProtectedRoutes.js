import React, { Component } from 'react';
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
    //check sessions, if not active, then redirect back to landing
  }

  render() {
    let { match } = this.props;
    //or maybe match.url
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