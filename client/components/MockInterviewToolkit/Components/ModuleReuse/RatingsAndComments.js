import React, { Component } from 'react';
import styled from 'styled-components';

class RatingsAndComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelValues: [0,1,2,3,4,5,6,7,8,9,10],
      selectedValue: null
    }
  }

  selectRadio = (e) => {
    let { questionId, category } = this.props;
    let { id } = e.target;
    this.setState({ selectedValue: id }, () => this.props.updateRating(questionId, category, id ));
  }

  render() {
    let { labelValues, selectedValue } = this.state;
    return (
      <div>
      <StyledForm action="">
        {labelValues.map(value => 
          <CenteredContainer key={value}>
            <CustomRadioButton
              id={value} 
              type="radio"
              checked={Number(selectedValue) === value}
              onChange={this.selectRadio}/> 
            <div>{value}</div>
          </CenteredContainer>
        )}
      </StyledForm>
    </div>
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CustomRadioButton = styled.input`
  &:checked {
    background-color: red;
  }
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 3px;
  border: 1px solid black;
  border-radius: 50%;
  background-clip: content-box;
  background-color: blue;
`;

export default RatingsAndComments;