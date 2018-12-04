import React, { Component } from 'react';

import Context from '../../Provider/Context';
import Question from '../ModuleReuse/Question';

class SearchQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      query: ''
    }
  }

  searchQuestions = (e) => {
    e.preventDefault();

  }

  updateQuery = (e) => {
    let { value } = e.target;
    this.setState({ query: value });
  }

  render() {
    return (
      <div>
        
        <form action="" onSubmit={this.searchQuestions}>
          <input type="text" onChange={this.updateQuery}/>
          <button type="submit"></button>
        </form>
        Search Results
        <Context.Consumer>
          {(provider) =>
            provider.state.questionData.map((question, index) =>
              <Question category={question.category} text={question.text} key={index}/>
            )
          }
        </Context.Consumer>
      </div>
    )
  }
}

export default SearchQuestion;