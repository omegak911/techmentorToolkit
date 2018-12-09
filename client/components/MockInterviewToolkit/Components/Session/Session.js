import React, { Component } from 'react';

import NewSession from './NewSession';
import SelectedSession from './SelectedSession';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedStudent: null,
      selectedSession: null,
      mode: null
    }
  }

  changeMode = (e) => {
    this.setState({ mode: e.target.name });
  }

  render() {
    let { mode, selectedSession, selectedStudent } = this.state;
    return(
      <div>
        Session - displays assign students

        displays sessions created for assigned student
        {selectedStudent && 
          <div>
            displays sessions from student object
            <button type="button" name="select" onClick={this.changeMode}>select session</button>
            <button type="button" name="create" onClick={this.changeMode}>create new session</button>

            {mode === 'select' && <SelectedSession selectedStudent={selectedStudent} session={selectedSession}/>}
            select Session - needs to select student and session before rendering this

            {mode === 'create' && <NewSession selectedStudent={selectedStudent} />}
            create Session

          </div>
        }


      </div>
    )
  }
}

export default Session;