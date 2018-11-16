import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Main from './Main';
import Navbar from './Navbar';
import ColdCallerAssistant from './ColdCallerAssistant/ColdCallerAssistant';
import Fate from './Fate/Fate';
import LearnThemNames from './LearnThemNames/LearnThemNames';

const App = (props) =>
  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/coldCallerAssistant" component={ColdCallerAssistant} />
        <Route path="/fate" component={Fate} />
        <Route path="/learnThemNames" component={() => <LearnThemNames image={props.image}/>} />
      </Switch>
    </div>
  </BrowserRouter>

export default App;