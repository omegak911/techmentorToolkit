import React, { Component } from 'react';

import NewSession from './NewSession';
import SelectedSession from './SelectedSession';

import Context from '../../Provider/Context';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedStudent: "pick a student",
      selectedSession: null,
      mode: null
    }
  }

  handleSelect = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    let { mode, selectedSession, selectedStudent } = this.state;
    return(
      <div>

        <div>
          <select value={selectedStudent} name="selectedStudent" onChange={this.handleSelect}>
            <option disabled={true}>pick a student</option>
            <Context.Consumer>
              {(provider) => {
                return provider.state.assignedStudents.map(student =>
                  <option key={student._id} student={student}>
                    {student.name}
                  </option>
                )
              }}
            </Context.Consumer>
          </select>
        </div>

        {selectedStudent !== "pick a student" && 
          <div>
            displays sessions from student object
            <button type="button" name="mode" value="select" onClick={this.handleSelect}>select session</button>
            <button type="button" name="mode" value="create" onClick={this.handleSelect}>create new session</button>

            {mode === 'select' && <SelectedSession selectedStudent={selectedStudent} session={selectedSession}/>}
            select Session - needs to select student and session before rendering this

            {mode === 'create' && <NewSession selectedStudent={selectedStudent} />}
            create Session

          </div>
        }


      </div>
    )
  }
}

export default Session;