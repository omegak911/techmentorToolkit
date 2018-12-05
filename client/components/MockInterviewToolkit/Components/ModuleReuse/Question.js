import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false
    }
  }

  showAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  }

  render() {
    let { _id, answer, category, question, handleQuestionSelect } = this.props;
    let { showAnswer } = this.state;
    return (
      <div>
        <button type="button" onClick={() => handleQuestionSelect({ _id, answer, category, question })}>select</button>
        <div>
          Category: {category}
        </div>
        <div>
          Question: {question}
        </div>
          <button type="button" onClick={this.showAnswer}>answer</button>
        {showAnswer && <div>{answer}</div>}
      </div>
    )
  }
} 

export default Question;