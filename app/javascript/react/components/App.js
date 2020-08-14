import React from 'react';
import Home from './caribou_react/Home';
import PlanATrip from './caribou_react/PlanATrip'
import Header from './caribou_react/Header';
import FriendsPage from './caribou_react/Friends'
import Map from './caribou_react/Map'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Header /> */}
      <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path='/trip' component={PlanATrip} />
       <Route exact path='/friends' component={FriendsPage} />
       <Route exact path='/map' component={Map} />

       </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
