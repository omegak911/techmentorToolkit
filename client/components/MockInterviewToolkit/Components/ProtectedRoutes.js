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
      mentorData: {},
      questionData: {},
      initalLoadComplete: false
    }
  }

  componentDidMount() {
    let { history } = this.props;
    axios
      .get('/api/mockInterview/main/')
      .then(({ data }) => { 
        console.log(data);
        let { studentData, mentorData, questionData } = this.state;
        this.setState({ studentData, mentorData, questionData, initalLoadComplete: true });
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
    let { studentData, mentorData, questionData, initalLoadComplete } = this.state;
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
              mentorData={mentorData} 
              updateMentorStudent={this.updateMentorStudent}
              />} />
      </div>
    )
  }
}

export default ProtectedRoutes;