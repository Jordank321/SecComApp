/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Stack, Scene } from './node_modules/react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import LoggedInMain from './components/LoggedInMain';
import { Provider } from 'react-redux';
import configureStore from './redux/Store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
  <Router>
    <View style={styles.container} hideNavBar={true}>
      <Stack key="root">
        <Scene key="loginScreen"
          component={LoginScreen}
          animation='fade'
          hideNavBar={true}
          initial={true}
        />
        <Scene key="messagesScreen"
          component={LoggedInMain}
          animation='fade'
          hideNavBar={true}
          panHandlers={null}
        />
        {/* <Scene key="conversation"
          component={ConversationScreen}
          animation='fade'
          hideNavBar={true}
          panHandlers={null}
        /> */}
      </Stack>
    </ View>
  </Router>
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});