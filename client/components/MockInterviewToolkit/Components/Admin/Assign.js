import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Context from '../../Provider/Context';

class Assign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assigned: [],
      unassigned: []
    }
  }

  addAssignment = (studentId, assignedStudentsObj, name) => {
    let studentsObj = {...assignedStudentsObj};
    studentsObj[studentId] = true;

    axios
      .patch('/api/mockInterview/main/mentor/', { name, studentId })
      .then(() => console.log('function to update provider assignedStudentsObj, assignedStudents, and remainingStudents'))
      .catch(() => console.error('error'))
  }

  removeAssignment = () => {

  }

  render() {
    return (
      <div>
        <Context.Consumer>
          {(provider) => 
            <StyledFlexRow>
              <StyledFlexCol>
                Your Students
                {provider.state.assignedStudents.map(student =>
                  <div key={student._id}>
                    <button>
                      unassign
                    </button>
                    {student.name}
                  </div>
                )}
              </StyledFlexCol>
              <StyledFlexCol>
                Other Students
                {provider.state.remainingStudents.map(student =>
                  <div key={student._id}>
                    <button onClick={() => this.addAssignment(student._id, provider.state.assignedStudentsObj, provider.state.username)}>
                        assign
                      </button>
                      {student.name}
                  </div>
                )}
              </StyledFlexCol>
            </StyledFlexRow>
          }
        </Context.Consumer>
      </div>
    )
  }
}

const StyledFlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Assign;