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
            console.log(organizedQuestionData, category)
            let ids = Object.keys(organizedQuestionData[category]);
            console.log(ids)
            return ids.map((id, index) => {
              let currentQuestion = organizedQuestionData[category][id];
              let { answer, question } = currentQuestion;
              if (id !== '' && (question.includes(query) || answer.includes(query))) {
                return <Question category={currentQuestion.category} question={currentQuestion.question} answer={currentQuestion.answer} key={index}/>
              }
            })
          }}
        </Context.Consumer>}
      </div>
    )
  }
}

export default SearchQuestion;