import React from 'react';

import Context from '../../Provider/Context';

const Categories = ({ handleCategorySelect }) =>
  <div>
    Existing Categories: {' '}
    <Context.Consumer>
      {(provider) => {
        return provider.state.categories.map((category, index) => 
          <button key={index} name={category} onClick={() => handleCategorySelect(category)}>{category}</button>
      )}}
    </Context.Consumer>
  </div>

export default Categories;