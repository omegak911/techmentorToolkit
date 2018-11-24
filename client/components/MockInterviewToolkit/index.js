import React, { Component } from 'react';
import { Route } from 'react-router';

import Context from './Provider/Context';
import Provider from './Provider/Provider';
import Landing from './Landing';
import ProtectedRoutes from './Components/ProtectedRoutes';

class MockInterviewToolkit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
  }

  proceedToHome = () => this.props.history.push(`${this.props.match.path}/home`);

  render() {
    let { match } = this.props;
    return (
      <div>
        <Provider>
          <Route exact path={`${match.path}/`} render={() => <Landing proceedToHome={this.proceedToHome} />}/>
          <Route path={`${match.path}/home`} render={(routeProps) =>
            <Context.Consumer>
              {(provider) =>
                <ProtectedRoutes
                  {...routeProps}
                  updateUsername={provider.updateUsername} 
                />
              }
            </Context.Consumer>
            } />
        </Provider>
      </div>
    )
  }
}

export default MockInterviewToolkit;