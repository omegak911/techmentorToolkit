import React, { Component } from 'react';
import styled from 'styled-components';

import Question from '../ModuleReuse/Question';

class SelectedSession extends Component {
  constructor(props) { //selectedStudent + session #
    super(props);
    this.state = {
      labelValues: [0,1,2,3,4,5,6,7,8,9,10],
      //objects with [_id] : { category: 'category', score: 'value' }
    }
  }

  handleQuestionSelect = ({ _id, category }) => {
    this.setState({ [_id]: { category }});
  }

  render() {
    let { selectedStudent, session } = this.props;
    let { labelValues } = this.state;
    return (
      <div>
        <p>Student: {` ${selectedStudent.name}`}</p>
        <p>Session #: {` ${session}`}</p>

        for each of those questions, have a textbox field + rating

        {selectedStudent.session[session].map(({ _id, answer, category, question }) =>
          //wrap this with a div
          <div key={_id} >
            <Question _id={_id} answer={answer} category={category} question={question} handleQuestionSelect={this.handleQuestionSelect} />
            <div>
              <StyledForm action="">
                {labelValues.map(value => 
                  <div key={value}>
                    <input type="radio"/>
                    <div>{value}</div>
                  </div>
                )}
              </StyledForm>
            </div>
          </div>
          //have the rating and notes here
        )}

      </div>
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`

export default SelectedSession;