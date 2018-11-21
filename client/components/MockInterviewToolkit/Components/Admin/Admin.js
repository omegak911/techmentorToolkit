import React, { Component } from 'react';
import axios from 'axios';

import Add from './Add';
import Assign from './Assign';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state ={
      mode: null,
      adminData: {},
      studentData: {}
    }
  }

  handleMode = e => {
    let { name } = e.target;
    this.setState({ mode: name })
  }

  render() {
    let { mode } = this.state;
    return(
      <div>
        <button type="button" name="Add" onClick={this.handleMode}>Add a student/mentor/admin</button>
        <button type="button" name="Assign" onClick={this.handleMode}>Assign A Student</button>
        {mode === 'Add' && <Add updateMentorStudent={this.props.updateMentorStudent}/>}

        {mode === 'Assign' && <Assign data={this.state}/>}
      </div>
    )
  }
}

export default Admin;