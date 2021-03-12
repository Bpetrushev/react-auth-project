import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from './UI/UI';
import { AuthProvider } from './context/AuthContext';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Container>
        <AuthProvider>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </AuthProvider>
      </Container>
    </Router>
  );
}

export default App;
