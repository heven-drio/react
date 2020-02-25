import React from 'react';
import './App.css';

import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'
import { Route,Switch,Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    
    <Provider store={store}>
      
      <Switch>
        <Route path='/main' component={Main}><Main /></Route>
        <Route path='/register' component={Register}><Register /></Route>
        <Route path='/login' component={Login}><Login /></Route>
        <Redirect from='/' to="/main" exact />
      </Switch>
    </Provider>

  );
}

export default App;
