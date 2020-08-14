import React from 'react';
import Home from './caribou_react/Home';
import PlanATrip from './caribou_react/PlanATrip'
import Header from './caribou_react/Header';
import FriendsPage from './caribou_react/Friends'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path='/trip' component={PlanATrip} />
       <Route exact path='/friends' component={FriendsPage} />
       </Switch>
    </div>
  );
}

export default App;
