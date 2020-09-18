import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setInitialData } from './utils/helper.js'
import DeckDashboard from './components/DeckDashboard.js'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers/'
import { createStore, applyMiddleware } from 'redux'
import Navigator from './navigation/navigator.js'
import { setLocalNotification } from './utils/notification.js'



const store = createStore(reducer, applyMiddleware(thunk,logger))

export default class App extends React.Component {
  componentDidMount (){
    setLocalNotification()
  }
  render(){
    return (
      <Provider store={store}>
        <Navigator style={styles.container}>
          <View style={styles.container}>
            <DeckDashboard />
          </View>
        </Navigator>
      </Provider>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
