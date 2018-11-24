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
      studentData: {},
      adminData: {},
      questionData: {},
      initalLoadComplete: false
    }
  }

  componentDidMount() {
    let { history, updateUsername } = this.props;
    axios
      .get('/api/mockInterview/main/')
      .then(({ data }) => {
        let { studentData, adminData, questionData, username } = data;
        updateUsername(username);
        this.setState({ studentData, adminData, questionData, initalLoadComplete: true }, 
          () => console.log(this.state));
      })
      .catch((err) => { 
        console.error(err);
        history.push('/mockInterview');
      });
  }

  updateMentorStudent = () => {
    console.log('updateMentorStudent')
    axios
      .get('/api/mockInterview/main/mentor')
      .then(({ data }) => {
        let { adminData, studentData } = data;
        this.setState({ adminData, studentData }, () => console.log(this.state));
      })
      .catch((err) => { 
        console.error(err);
      });
  }

  render() {
    let { match } = this.props;
    let { studentData, adminData, questionData, initalLoadComplete } = this.state;
    return (
      <div>
        <Navbar match={match}/>
        <Route exact path={`${match.path}/`} component={Stats}/>
        <Route path={`${match.path}/create`} component={CreationLab}/>
        <Route path={`${match.path}/session`} component={Session}/>
        <Route 
          path={`${match.path}/admin`} 
          render={() => <Admin
              studentData={studentData} 
              adminData={adminData} 
              updateMentorStudent={this.updateMentorStudent}
              />} />
      </div>
    )
  }
}

export default ProtectedRoutes;