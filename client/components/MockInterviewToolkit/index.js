import React, { Component } from 'react';
import { Route } from 'react-router';

import Landing from './Landing';
import ProtectedRoutes from './Components/ProtectedRoutes';

class MockInterviewToolkit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  updateUsername = (username) => {
    let { match, history } = this.props;
    this.setState({ username }, () => history.push(`${match.path}/home`));
    //upon updating username, 

  }

  render() {
    let { match } = this.props;
    let { username } = this.state;
    return (
      <div>
        <Route exact path={`${match.path}/`} render={() => <Landing updateUsername={this.updateUsername} />}/>
        <Route path={`${match.path}/home`} render={(routeProps) => <ProtectedRoutes {...routeProps} username={username} />}/>
      </div>
    )
  }
}


      // <Link to={`${match.url}/${id}`}>{name}</Link>

      // <Route path={`${match.path}/:topicId`} component={Topic}/>


export default MockInterviewToolkit;