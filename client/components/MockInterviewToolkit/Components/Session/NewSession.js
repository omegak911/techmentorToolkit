import React, { Component } from 'react';
import axios from 'axios';

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

  saveSession = () => {
    let { _id } = this.props.selectedStudent;
    let { session, sessionQuestions } = this.state;
    let sessionQuestionsObject = {}

    for (let i = 0; i < sessionQuestions.length; i++) {
      let question = sessionQuestions[i];
      sessionQuestionsObject[question._id] = { category: question.category, score: null };
    }

    axios
      .patch('/api/mockInterview/main/student', { _id, session, sessionQuestions: sessionQuestionsObject })
      .then(() => console.log('update provider with new session data on student object'))
      .catch(() => console.error('NewSession saveSession error'))
  }

  //MVP+: order/reorder questions

  render() {
    let { duplicate, session, sessionQuestions } = this.state;
    return (
      <div>        
        <p>Next Session #: {` ${session}`}</p>
        <button type="button" onClick={this.saveSession}>save</button>
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