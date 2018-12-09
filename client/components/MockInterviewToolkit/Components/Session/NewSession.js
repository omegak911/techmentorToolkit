import React, { Component } from 'react';

import SearchQuestion from '../ModuleReuse/SearchQuestion';

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

  render() {
    let { session } = this.state;
    return (
      <div>
        Features
        
        Next Session #: {` ${session}`}

        SearchQuestion that uses handleQuestionSelect to select a question
        function to attach question to a specific student
          when we attach the question, we should add a session property indicating which session it belongs to
      </div>
    )
  }
}

export default NewSession;