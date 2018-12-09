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
      selectedQuestion: null,
      success: false,
      error: false
    }
  }

  createQuestion = () => {
    let { category, question, answer } = this.state;
    
    let allFieldsPresent = category.length > 0 && question.length > 0 && answer.length > 0

    if (allFieldsPresent) {
      axios
        .post('/api/mockInterview/main/questions', {category, question, answer })
        .then(() => this.setState({ success: true, error: false, category: '', question: '', answer: '' }))
        //need to add function here to update provider
        .catch(() => console.error('something went wrong when creating a question'));
    } else {
      this.setState({ error: true });
    }
  }

  updateQuestion = () => {
    let { category, question, answer, selectedQuestion } = this.state;
    let { _id } = selectedQuestion;
    let payload = {
        _id,
        category,
        question,
        answer
    }

    axios
      .patch('/api/mockInterview/main/questions', payload)
      .then(() => {
        console.log('done')
      })
      .catch(() => console.error('patchQuestion error'))
  }

  deleteQuestion = () => {
    let { _id } = this.state.selectedQuestion;
    let options = {
      data: {
        _id
      }
    }
    axios
      .delete('/api/mockInterview/main/questions', options)
      .then(() => {
        //remove question from Provider
      })
      .catch(() => console.error('deleteQuestion error'));
  }

  handleCategorySelect = (category) => {
    this.setState({ category, newCategory: '' });
  }

  handleQuestionSelect = (selectedQuestion) => {
    let { category, question, answer } = selectedQuestion;
    if (this.state.mode === 'Update') {
      this.setState({ selectedQuestion, category, question, answer });
    } else {
      this.setState({ selectedQuestion }, () => console.log(this.state.selectedQuestion));
    }
  }

  handleQuestionSubmit = (e) => {
    e.preventDefault();
    let { mode } = this.state;

    let options = {
      Add: this.createQuestion,
      Delete: this.deleteQuestion,
      Update: this.updateQuestion
    }

    options[mode] ? options[mode]() : this.setState({ error: true });
  }

  updateText = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    let { category, newCategory, question, answer, success, error, mode, selectedQuestion } = this.state;
    return(
      <div>
        <div>
          MODE: {mode}
          <br/>
          <button type="button" name="mode" value="Add" onClick={this.updateText}>Add</button>
          <button type="button" name="mode" value="Update" onClick={this.updateText}>Update</button>
          <button type="button" name="mode" value="Delete" onClick={this.updateText}>Delete</button>
        </div>

        <br/>

        {mode === 'Delete' && selectedQuestion && 
          <div>
            <p>Selected Question: {selectedQuestion.question}</p>
            <button type="button" onClick={this.handleQuestionSubmit}>{mode}</button>
          </div>
        }

        <br/>
        {(mode === 'Add' || mode === 'Update') && <div>
          {success && <div>Thank you for your contribution</div>}
          {error && <div>missing a field (mode, category, question, answer)</div>}
          Current category: {category}
          <Categories handleCategorySelect={this.handleCategorySelect}/>
          <form action="" onSubmit={(e) => { e.preventDefault(); this.handleCategorySelect(newCategory)}}>
            <input name="newCategory" value={newCategory} type="text" onChange={this.updateText} placeholder="new category"/>
            <button type="submit">Add Category</button>
          </form>
          <br/>
          <form action="" onSubmit={this.handleQuestionSubmit}>
            <input name="question" value={question} type="text" onChange={this.updateText} placeholder="question text"/>
            <input name="answer" value={answer} type="text" onChange={this.updateText} placeholder="answer text"/>
            <button type="submit">Add Question</button>
          </form>
        </div>}

        {(mode === 'Update' || mode === 'Delete') && 
          <SearchQuestion handleQuestionSelect={this.handleQuestionSelect}/>
        }
      </div>
    )
  }
}

export default CreationLab;