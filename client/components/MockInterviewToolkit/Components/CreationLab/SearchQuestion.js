import React, { Component } from 'react';

import Context from '../../Provider/Context';
import Question from '../ModuleReuse/Question';
import Categories from '../ModuleReuse/Categories';

class SearchQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      query: ''
    }
  }

  handleCategorySelect = (category) => {
    this.setState({ category });
  }

  searchQuestions = (e) => {
    e.preventDefault();

  }

  updateQuery = (e) => {
    let { value } = e.target;
    this.setState({ query: value });
  }

  render() {
    let { category, query } = this.state;
    let { handleQuestionSelect } = this.props;
    return (
      <div>
        <Categories handleCategorySelect={this.handleCategorySelect}/>
        <form action="" onSubmit={this.searchQuestions}>
          <input type="text" onChange={this.updateQuery}/>
          <button type="submit">search</button>
        </form>
        Search Results
        {category && <Context.Consumer>
          {(provider) => {
            let { organizedQuestionData } = provider.state;
            let ids = Object.keys(organizedQuestionData[category]);
            return ids.map(id => {
              let currentQuestion = organizedQuestionData[category][id];
              let { answer, question } = currentQuestion;
              if (id !== '' && (question.includes(query) || answer.includes(query))) {
                return (
                  <Question 
                    _id={id} 
                    answer={answer} 
                    category={currentQuestion.category} 
                    handleQuestionSelect={handleQuestionSelect}
                    key={id}
                    question={question} 
                    />
                )
              }
            })
          }}
        </Context.Consumer>}
      </div>
    )
  }
}

export default SearchQuestion;