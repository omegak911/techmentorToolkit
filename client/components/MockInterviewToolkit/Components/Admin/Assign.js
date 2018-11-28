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

  addAssignment = (studentId, name) => {
    axios
      .patch('/api/mockInterview/main/mentor/', { name, studentId })
      .then(() => this.props.updateAssignment(studentId, 'add'))
      .catch(() => console.error('error'))
  }

  removeAssignment = (studentId, name) => {
    let params = {
      data: {
        name,
        studentId
      }
    }
    axios
      .delete('/api/mockInterview/main/mentor/', params)
      .then(() => this.props.updateAssignment(studentId, 'delete'))
      .catch(() => console.error('error'))
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
                  <StyledFloatLeft key={student._id}>
                    <button onClick={() => this.removeAssignment(student._id, provider.state.username)}>
                      unassign
                    </button>
                    {` ${student.name}`}
                  </StyledFloatLeft>
                )}
              </StyledFlexCol>
              <StyledFlexCol>
                Other Students
                {provider.state.remainingStudents.map(student =>
                  <StyledFloatLeft key={student._id}>
                    <button onClick={() => this.addAssignment(student._id, provider.state.username)}>
                        assign
                      </button>
                      {` ${student.name}`}
                  </StyledFloatLeft>
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
  border: 1px solid black;
`

const StyledFloatLeft = styled.div`
  margin-left: 0;
  margin-right: auto;
`

export default Assign;