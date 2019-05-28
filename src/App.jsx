import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import CharacterListContainer from './containers/CharacterListContainer';
import CharacterDetailContainer from './containers/CharacterDetailContainer';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <h1 className="list-heading">The Rick and Morty</h1>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/characters" component={CharacterListContainer} />
            <Route path="/characters/:id" component={CharacterDetailContainer} />
            <Redirect to="/characters" />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
