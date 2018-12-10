import React, { Component } from 'react';

import SearchQuestion from '../ModuleReuse/SearchQuestion';
import Question from '../ModuleReuse/Question';

class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestion: null,
      session: null,
      sessionQuestions: []
    }
  }

  componentDidMount() {
    let { session } = this.props.selectedStudent;
    for (let i = 1; i < 10; i++) {
      if (!session[i]) {
        return this.setState({ session: i });
      }
    }
  }

  handleQuestionSelect = ({ _id, answer, category, question }) => {
    let sessionQuestions = [...this.state.sessionQuestions];
    sessionQuestions.push({ _id, answer, category, question });
    this.setState({ sessionQuestions }, () => console.log(this.state.sessionQuestions));
  }

  render() {
    let { session, sessionQuestions } = this.state;
    return (
      <div>        
        <p>Next Session #: {` ${session}`}</p>
        <SearchQuestion handleQuestionSelect={this.handleQuestionSelect}/>

        <ul>
          {sessionQuestions.map(({ _id, answer, category, question}) => 
            <li key={_id}>
              <Question 
                _id={_id} 
                answer={answer} 
                category={category} 
                handleQuestionSelect={() => 'no action required'}
                question={question} 
              />
            </li>
          )}
        </ul>

        function to attach question to a specific student
          when we attach the question, we should add a session property indicating which session it belongs to
      </div>
    )
  }
}

export default NewSession;