import React, { Component } from 'react';

import SearchQuestion from '../ModuleReuse/SearchQuestion';
import Question from '../ModuleReuse/Question';

class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duplicate: false,
      selectedQuestion: null,
      session: null,
      sessionQuestions: [],
      sessionQHist: {}
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
    if (this.state.sessionQHist[_id]) {
      this.setState({ duplicate: true });
    } else {
      let sessionQHist = {...this.state.sessionQHist};
      let sessionQuestions = [...this.state.sessionQuestions];
      sessionQHist[_id] = true;
      sessionQuestions.push({ _id, answer, category, question });
      this.setState({ sessionQHist, sessionQuestions, duplicate: false });
    }
  }

  render() {
    let { duplicate, session, sessionQuestions } = this.state;
    return (
      <div>        
        <p>Next Session #: {` ${session}`}</p>
        {duplicate && <div>Error: Selected question already exists in current session</div>}
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