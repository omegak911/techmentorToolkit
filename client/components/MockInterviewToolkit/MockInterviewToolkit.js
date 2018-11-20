import React, { Component } from 'react';

class MockInterviewToolkit extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
    Login/Create
      - regular password for login
      - master password for creation

    - name + password + conditional rendering as security //we want multiple accounts and a master account
    - password would be in config
    Stats
    - keep track of student progress (sessions, scale of how well they did + comments)
    - tracker to display students with associated ratings + averages
    Sessions
    - customize + save clickable questions to a specific student
      - exclude questions they have already done
      - save for specific session //that way we can plan ahead
    Submit
    - add student
    - add questions/category
      </div>
    )
  }
}

export default MockInterviewToolkit;