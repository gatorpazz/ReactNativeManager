import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBI0ywlWsXVBZE9ancY9iIlRfU7cZUSGqM',
      authDomain: 'manager-cc578.firebaseapp.com',
      databaseURL: 'https://manager-cc578.firebaseio.com',
      projectId: 'manager-cc578',
      storageBucket: 'manager-cc578.appspot.com',
      messagingSenderId: '635543597491'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
