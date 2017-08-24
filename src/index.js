import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
