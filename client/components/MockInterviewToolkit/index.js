import React, { Component } from 'react';
import { Route } from 'react-router';

import Landing from './Landing';
import ProtectedRoutes from './ProtectedRouters';

class MockInterviewToolkit extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}/`} component={Landing}/>
        <Route path="home" component={ProtectedRoutes}/>
      </div>
    )
  }
}


      // <Link to={`${match.url}/${id}`}>{name}</Link>

      // <Route path={`${match.path}/:topicId`} component={Topic}/>


export default MockInterviewToolkit;