import React, { Component } from 'react';

class NewSession extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: null,
      selectedQuestion: null,
      session: null,
      sessionQuestions: []
    }
  }

  render() {
    return (
      <div>
        Features

        Similar to the Assign Component, we want to show currently assigned students to be selected

        Declare session #

        SearchQuestion that uses handleQuestionSelect to select a question
        function to attach question to a specific student
          when we attach the question, we should add a session property indicating which session it belongs to
      </div>
    )
  }
}

export default NewSession;