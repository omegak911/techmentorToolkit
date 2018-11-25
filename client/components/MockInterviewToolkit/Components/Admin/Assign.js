import React, { Component } from 'react';

import Context from '../../Provider/Context';
import styled from 'styled-components';

class Assign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assigned: [],
      unassigned: []
    }
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
                    {student.name}
                  </div>
                )}
              </StyledFlexCol>
              <StyledFlexCol>
              Other Students
              {provider.state.remainingStudents.map(student =>
                <div key={student._id}>
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