import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="flexCenter flexColumn">
        Welcome!  Here we have a collection of tools designed to assist with the Tech Mentors @ HRLA
        <div>
          <Link to="/coldCallerAssistant">ColdCallerAssistant</Link>
          : Paste list of githubhandles and get array of names/photos
        </div>
        <div>
          <Link to="/fate">Fate</Link>
          : Paste list of names and start sacrificing students with questions
        </div>
        <div>
          <Link to="/learnThemNames">Learn Them Names</Link>
          : Let's learn the names for HRLA26!
        </div>
      </div>
    )
  }
}

export default Main;