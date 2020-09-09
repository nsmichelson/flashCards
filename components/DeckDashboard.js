import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setInitialData, getDecks } from '../utils/helper.js'

class DeckDashboard extends React.Component {
  componentDidMount(){
    let initialData= null
    initialData = setInitialData()
    console.log("this is the initialData",initialData)
  }
  render(){
    if (initialData !== null){
    return(
      <View>
        <Text>{initialData}</Text>
      </View>
    )
  }
  else{
    return(
      <View>
      </View>
    )
  }
}
}

export default DeckDashboard
