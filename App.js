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


const store = createStore(reducer, applyMiddleware(thunk,logger))

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckDashboard />
          <StatusBar style="auto" />
        </View>
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
  },
});
