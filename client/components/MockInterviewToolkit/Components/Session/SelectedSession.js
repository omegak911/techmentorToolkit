import React, { Component } from 'react';

class SelectedSession extends Component {
  constructor(props) { //selectedStudent + session #
    super(props);
    this.state = {
      
    }
  }

  render() {
    let { selectedStudent, session } = this.props;
    return (
      <div>
        shows student name + session #
        Student: {` ${selectedStudent.name}`}
        Session #: {` ${session}`}

        displays list of questions for that session # (iterate thru student questions and render based on session val)

        for each of those questions, have a textbox field + rating

      </div>
    )
  }
}

export default SelectedSession;