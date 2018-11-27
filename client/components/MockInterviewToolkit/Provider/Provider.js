import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Context from './Context';
import axios from 'axios';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminData: {},
      questionData: {},
      studentData: {},
      username: '',
      assignedStudentsObj: {},
      assignedStudents: [],
      remainingStudents: []
    }
  }

  initialLoadUpdate = (adminData, studentData, questionData, username ) => {
    let { 
      assignedStudentsObj, 
      assignedStudents, 
      remainingStudents 
    } = this.filterStudents(adminData, studentData, username);

    this.setState({ 
      adminData, 
      studentData, 
      questionData, 
      username, 
      assignedStudentsObj, 
      assignedStudents, 
      remainingStudents }, () => console.log(this.state));
  }

  filterStudents = (adminData, studentData, username) => {
    let assignedStudents = [];
    let remainingStudents = [];
    let assignedStudentsObj = {};
    for (let i = 0; i < adminData.length; i++) {
      if (adminData[i].name === username) {
        assignedStudentsObj = adminData[i].students;
      }
    }

    for (let k = 0; k < studentData.length; k++) {
      if (assignedStudentsObj[studentData[k]._id]) {
        assignedStudents.push(studentData[k]);
      } else {
        remainingStudents.push(studentData[k]);
      }
    }

    return { assignedStudentsObj, assignedStudents, remainingStudents };
  }

  updateAdminStudent = () => {
    axios
      .get('/api/mockInterview/main/mentor/')
      .then(({ data }) => {
        let { adminData, studentData } = data;
        let { assignedStudentsObj, assignedStudents, remainingStudents } = this.filterStudents(adminData, studentData, username);
        this.setState({ adminData, studentData, assignedStudentsObj, assignedStudents, remainingStudents }, () => console.log(this.state));
      })
      .catch((err) => { 
        console.error(err);
        history.push('/mockInterview');
      });

  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          initialLoadUpdate: this.initialLoadUpdate,
          updateAdminStudent: this.updateAdminStudent,
        }} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default withRouter(Provider);