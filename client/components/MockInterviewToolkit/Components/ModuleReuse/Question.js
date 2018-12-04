import React from 'react';

const Question = ({ category, text }) =>
  <div>
    <div>
      {category}
    </div>
    <div>
      {text}
    </div>
  </div>

export default Question;