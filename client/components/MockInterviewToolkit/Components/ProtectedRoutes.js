import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router';

import Navbar from './Nav';
import Stats from './Stats';
import CreationLab from './CreationLab';
import Session from './Session';
import Admin from './Admin/Admin';

class ProtectedRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.getEverything();
  }

  getEverything = () => {
    console.log('ProtectedRoutes getEverything')
    let { history, initialLoadUpdate } = this.props;
    axios
      .get('/api/mockInterview/main/')
      .then(({ data }) => {
        let { adminData, studentData, questionData, username } = data;
        initialLoadUpdate(adminData, studentData, questionData, username);
      })
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
        <Route exact path={`${match.path}/`} component={Stats}/>
        <Route path={`${match.path}/create`} component={CreationLab}/>
        <Route path={`${match.path}/session`} component={Session}/>
        <Route path={`${match.path}/admin`} component={Admin} />
      </div>
    )
  }
}

export default ProtectedRoutes;