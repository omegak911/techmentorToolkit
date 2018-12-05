import React, { Component } from 'react';
import styled from 'styled-components';

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
      <StyledSearchContainer>
        <Categories handleCategorySelect={this.handleCategorySelect}/>
        <form action="" onSubmit={this.searchQuestions}>
          <input type="text" onChange={this.updateQuery}/>
          <button type="submit">search</button>
        </form>
        Search Results:

        {category && 
          <StyledSearchContainer>
            <Context.Consumer>
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
                        category={category} 
                        handleQuestionSelect={handleQuestionSelect}
                        key={id}
                        question={question} 
                        />
                    )
                  }
                })
              }}
            </Context.Consumer>
          </StyledSearchContainer>
        }

      </StyledSearchContainer>
    )
  }
}

const StyledSearchContainer = styled.div`
  border: 1px solid black;
  margin: 1%;
  padding: 0.5%;
`

export default SearchQuestion;