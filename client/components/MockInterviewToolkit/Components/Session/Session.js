import React, { Component } from 'react';

import NewSession from './NewSession';
import SelectedSession from './SelectedSession';

import Context from '../../Provider/Context';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedStudent: {
        name: "pick a student"
      },
      selectedSession: null,
      mode: null
    }
  }

  selectMode = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  selectStudent = (selectedStudent) => {
    this.setState({ selectedStudent });
  }

  render() {
    let { mode, selectedSession, selectedStudent } = this.state;
    return(
      <div>
        <div>
          <Context.Consumer>
            {(provider) =>
              <select value={selectedStudent.name} onChange={(e) => this.selectStudent(provider.state.assignedStudents[e.target.value])}>
                <option disabled={true}>pick a student</option>
                {provider.state.assignedStudents.map((student, i) =>
                  <option key={student._id} student={student} value={i}>
                    {student.name}
                  </option>
                )}
              </select>
            }
          </Context.Consumer>
        </div>

        {selectedStudent.name !== "pick a student" && 
          <div>
            What would you like to do today?:
            <button type="button" name="mode" value="create" onClick={this.selectMode}>create new session</button>
            <button type="button" name="mode" value="select" onClick={this.selectMode}>select session</button>

            {mode === 'create' && <NewSession selectedStudent={selectedStudent} />}

            {mode === 'select' && !selectedStudent.session['1'] && <div>{`${selectedStudent.name} does not have any sessions`}</div>}
            {mode === 'select' && selectedStudent.session['1'] && <SelectedSession selectedStudent={selectedStudent} session={selectedSession}/>}
          </div>
        }


      </div>
    )
  }
}

export default Session;