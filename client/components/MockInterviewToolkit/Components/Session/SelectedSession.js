import React, { Component } from 'react';
import styled from 'styled-components';

import Context from '../../Provider/Context';
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
    // this.setState({ [_id]: { category }}); okay I dont think this needs to do anything
  }

  updateRating = (_id, category, value) => {
    this.setState({ [_id]: { category, value }})
  }

  /*  
  persist
  for (let key in this.state) {
    if it's not an id, dont do anything
    otherwise add to an object so we can update the selected Student in DB and provider
  }

  */

  render() {
    let { selectedStudent, session } = this.props;
    let { labelValues } = this.state;
    return (
      <div>
        <p>Student: {` ${selectedStudent.name}`}</p>
        <p>Session #: {` ${session}`}</p>

        for each of those questions, have a textbox field + rating



        {/* okay let's refactor this
          student object should look like
          {
            name:
            cohort
            session: {
              1: {
                id: {
                  category
                  score
                },
                id: {
                  category
                  score
                }
              },
              2: {
                id: {
                  category
                  score
                },
                id: {
                  category
                  score
                }
              }
            }

          } 
            {Object.keys(selectedStudent.session[session]) gives me question ids     
         */}

         <Context.Consumer>
           {(provider) => 
            Object.keys(selectedStudent.session[session]).map(questionId => {
              let { category } = selectedStudent.session[session][questionId];
              let { answer, question } = provider.state.organizedQuestionData[category][questionId];
              return (
                <div key={questionId}>
                  <Question _id={questionId} answer={answer} category={category} question={question} handleQuestionSelect={this.handleQuestionSelect} />
                  <div>
                    <StyledForm action="">
                      {labelValues.map(value => 
                        <div key={value}>
                          <input type="radio" onClick={() => this.updateRating(questionId, category, value)}/>
                          <div>{value}</div>
                        </div>
                      )}
                    </StyledForm>
                  </div>
                </div>
              )
            })
           }
         </Context.Consumer>

          {/* //have the expandable notes here */}
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