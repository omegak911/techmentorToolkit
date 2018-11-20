import React, { Component } from 'react';
import Navbar from './Nav';

class MockInterviewToolkit extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    //apicall to determine authentication
    //if not authenticated, redirect to Landing
  }

  render() {
    let { match } = this.props;
    return (
      <div>
    Login/Create
      - regular password for login
      - master password for creation

    - name + password + conditional rendering as security //we want multiple accounts and a master account
    - password would be in config
    Stats
    - keep track of student progress (sessions, scale of how well they did + comments)
    - tracker to display students with associated ratings + averages
    Sessions
    - customize + save clickable questions to a specific student
      - exclude questions they have already done
      - save for specific session //that way we can plan ahead
    Submit
    - add student
    - add questions/category

    state object to determine if Nav should be shown
    {/* <Navbar />
    <Route exact path={`${match.path}/`} component={Landing}/>

    <Route path={`${match.path}/main`} component={Stats}/>
    <Route path={`${match.path}/create`} component={CreationLan}/>
    <Route path={`${match.path}/session`} component={Session}/> */}
      </div>
    )
  }
}


      // <Link to={`${match.url}/${id}`}>{name}</Link>

      // <Route path={`${match.path}/:topicId`} component={Topic}/>


export default MockInterviewToolkit;