import React, { Component } from 'react';
import styled from 'styled-components';

import Context from '../../Provider/Context';
import Question from '../ModuleReuse/Question';
import RatingsAndComments from '../ModuleReuse/RatingsAndComments';

class SelectedSession extends Component {
  constructor(props) { //selectedStudent + session #
    super(props);
    this.state = {
      ratings: {}, //objects with [_id] : { category: 'category', score: 'value' }
    }
  }

  handleQuestionSelect = ({ _id, category }) => {
    // this.setState({ [_id]: { category }}); okay I dont think this needs to do anything
  }

  updateRating = (_id, category, value) => {
    let ratings = {...this.state.ratings};
    ratings[_id] = { category, value };
    this.setState({ ratings }, () => console.log(this.state.ratings));
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
    return (
      <div>
        <p>Student: {` ${selectedStudent.name}`}</p>
        <p>Session #: {` ${session}`}</p>

        for each of those questions, have a textbox field + rating
         <Context.Consumer>
           {(provider) => 
            Object.keys(selectedStudent.session[session]).map(questionId => {
              let { category } = selectedStudent.session[session][questionId];
              let { answer, question } = provider.state.organizedQuestionData[category][questionId];
              return (
                <div key={questionId}>
                  <Question _id={questionId} answer={answer} category={category} question={question} handleQuestionSelect={this.handleQuestionSelect} />
                  <RatingsAndComments questionId={questionId} category={category} updateRating={this.updateRating}/>
                </div>
              )
            })
           }
         </Context.Consumer>

          {/* //have the expandable notes here */}
      </div>
    )
  }
}

export default SelectedSession;