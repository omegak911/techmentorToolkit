import React, { Component } from 'react';
import axios from 'axios';

import Add from './Add';
import Assign from './Assign';

import Context from '../../Provider/Context';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state ={
      mode: null,
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
        {mode === 'Add' && 
          <Context.Consumer>
            {(provider) => <Add updateAdminStudent={provider.updateAdminStudent}/>}
          </Context.Consumer>
        }
        {mode === 'Assign' && 
          <Context.Consumer>
            {(provider) => 
              <Assign 
                adminData={provider.adminData} 
                studentData={provider.studentData} 
                updateAssignment={provider.updateAssignment}
              />}
          </Context.Consumer>
        }
      </div>
    )
  }
}

export default Admin;