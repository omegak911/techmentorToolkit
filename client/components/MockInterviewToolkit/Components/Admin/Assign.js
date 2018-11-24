import React, { Component } from 'react';

import styled from 'styled-components';

class Assign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assigned: [],
      unassigned: []
    }
  }

  filter = () => {
    let { adminData, studentData } = this.props;
    let assigned = [];
    let unassigned = [];
    // based on login username, checks adminData against studentData and displays 
    //pushes to assigned if on adminData
    //pushes to unassigned otherwise

  }

  render() {
    let { assigned, unassigned } = this.state;
    return (
      <StyledFlexRow>
        left side shows assigned students
        <StyledFlexCol>

        </StyledFlexCol>
        right side shows all other students
        <StyledFlexCol>

        </StyledFlexCol>
      </StyledFlexRow>
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