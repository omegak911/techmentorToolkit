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
      remainingStudents: [],
      categories: []
    }
  }

  initialLoadUpdate = (adminData, studentData, questionData, username ) => {
    let assignedStudentsObj = this.createAssignedStudentObj(adminData, username);
    let { assignedStudents, remainingStudents } = this.filterStudents(assignedStudentsObj, studentData);
    let categories = this.identifyQuestionCategories(questionData);

    this.setState({ 
      adminData, 
      studentData, 
      questionData, 
      username, 
      assignedStudentsObj, 
      assignedStudents, 
      remainingStudents,
      categories }, () => console.log(this.state));
  }

  createAssignedStudentObj = (adminData, username = this.state.username) => {
    let assignedStudentsObj = {};
    for (let i = 0; i < adminData.length; i++) {
      if (adminData[i].name === username) {
        assignedStudentsObj = adminData[i].students;
      }
    }

    return assignedStudentsObj;
  }

  filterStudents = (assignedStudentsObj, studentData) => {
    let assignedStudents = [];
    let remainingStudents = [];

    for (let k = 0; k < studentData.length; k++) {
      if (assignedStudentsObj[studentData[k]._id]) {
        assignedStudents.push(studentData[k]);
      } else {
        remainingStudents.push(studentData[k]);
      }
    }

    return { assignedStudents, remainingStudents };
  }

  identifyQuestionCategories = (questionData) => {
    let hist = {};
    let categories = [];
    for (let i = 0; i < questionData.length; i++) {
      let { category } = questionData;
      if (!hist[category]) {
        hist[category] = true;
        categories.push(category);
       }
    }
    return categories;
  }

  updateAdminStudent = () => { //we need the update to be an API call because we need the DB IDs
    axios
      .get('/api/mockInterview/main/mentor/')
      .then(({ data }) => {
        let { adminData, studentData } = data;
        let assignedStudentsObj = this.createAssignedStudentObj(adminData);
        let { assignedStudents, remainingStudents } = this.filterStudents(assignedStudentsObj, studentData);
        this.setState({ adminData, studentData, assignedStudentsObj, assignedStudents, remainingStudents }, () => console.log(this.state));
      })
      .catch((err) => { 
        console.error(err);
        this.props.history.push('/mockInterview');
      });
  }

  updateAssignment = (studentId, type) => { //no need for api call since we're using existing data
    let { studentData } = this.state;
    let assignedStudentsObj = {...this.state.assignedStudentsObj};
    if (type === 'add') {
      assignedStudentsObj[studentId] = true;
    } else if (type === 'delete') {
      delete assignedStudentsObj[studentId];
    }

    let { assignedStudents, remainingStudents } = this.filterStudents(assignedStudentsObj, studentData);
    this.setState({ assignedStudentsObj, assignedStudents, remainingStudents }, () => console.log(this.state));
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          initialLoadUpdate: this.initialLoadUpdate,
          updateAdminStudent: this.updateAdminStudent,
          updateAssignment: this.updateAssignment,
        }} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default withRouter(Provider);