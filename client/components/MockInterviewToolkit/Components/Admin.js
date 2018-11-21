import React, { Component } from 'react';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state ={
      addType: null,
      name: '',
      cohort: '',
      password: '',
    }
  }

  handleAddTypeButton = (e) => {
    let { name } = e.target;
    this.setState({ addType: name });
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //route to the right place depending on addType
    //upon completion or failure, change fields back to blank
    let { addType: endpoint, name, cohort, password } = this.state;

    

  //     .get('/api/mockInterview/main/') student/mentor/admin
  //student needs name and cohort
  //mentor/admin needs name and password
    e.target.reset();
  }

  render() {
    let { addType } = this.state;
    return(
      <div>
        Admin
        <div>
          Add a...
          <button type="button" name="student" onClick={this.handleAddTypeButton}>Student</button>
          <button type="button" name="mentor" onClick={this.handleAddTypeButton}>Mentor</button>
          <button type="button" name="admin" onClick={this.handleAddTypeButton}>Admin</button>
        </div>
        {addType &&
          <div>
            <form action="" onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="name"/>
              {addType === 'student' && <input type="text" name="cohort" placeholder="cohort"/>}
              <input type="password" name="password" placeholder="authorization password"/>
              <button type="submit">submit</button>
            </form>
          </div>
        }
      </div>
    )
  }
}

export default Admin;