import React, { Component } from 'react';
import axios from 'axios';

import Categories from '../ModuleReuse/Categories';
import SearchQuestion from './SearchQuestion';

class CreationLab extends Component {
  constructor(props) {
    super(props);
    this.state ={
      category: '',
      newCategory: '',
      question: '',
      answer: '',
      success: false
    }
  }

  createQuestion = (e) => {
    e.preventDefault();

    let { category, question, answer } = this.state;
    axios
      .post('/api/mockInterview/main/questions', {category, question, answer })
      .then(() => this.setState({ success: true, category: '', question: '', answer: '' }))
      .catch(() => console.error('something went wrong when creating a question'));
  }

  handleCategorySelect = (category) => {
    this.setState({ category, newCategory: '' });
  }

  updateText = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    let { category, newCategory, question, answer, success } = this.state;
    return(
      <div>
        {success && <div>Thank you for your contribution</div>}
        Current category: {category}
        <Categories handleCategorySelect={this.handleCategorySelect}/>
        <form action="" onSubmit={(e) => { e.preventDefault(); this.handleCategorySelect(newCategory)}}>
          <input name="newCategory" value={newCategory} type="text" onChange={this.updateText} placeholder="new category"/>
          <button type="submit">Add Category</button>
        </form>
        <br/>
        <form action="" onSubmit={this.createQuestion}>
          <input name="question" value={question} type="text" onChange={this.updateText} placeholder="question text"/>
          <input name="answer" value={answer} type="text" onChange={this.updateText} placeholder="answer text"/>
          <button type="submit">Add Question</button>
        </form>

        modify question - have search bar

        delete question - have search bar
      </div>
    )
  }
}

export default CreationLab;