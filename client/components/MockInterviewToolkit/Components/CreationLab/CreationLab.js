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
      text: ''
    }
  }

  createQuestion = (e) => {
    e.preventDefault();

  }

  handleCategorySelect = (category) => {
    this.setState({ category });
  }

  updateText = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div>
        Current category: {this.state.category}
        <Categories handleCategorySelect={this.handleCategorySelect}/>
        <form action="" onSubmit={(e) => { e.preventDefault(); this.handleCategorySelect(this.state.newCategory)}}>
          <input name="newCategory" type="text" onChange={this.updateText} placeholder="new category"/>
          <button type="submit">Add Category</button>
        </form>
        <br/>
        <form action="" onSubmit={this.createQuestion}>
          <input anme="text" type="text" onChange={this.updateText} placeholder="question text"/>
          <button type="submit">Add Question</button>
        </form>

        modify question - have search bar

        delete question - have search bar
      </div>
    )
  }
}

export default CreationLab;