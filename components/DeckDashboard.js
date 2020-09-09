import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setInitialData, getDecks } from '../utils/helper.js'
import { initialData } from '../utils/variables.js'

class DeckDashboard extends React.Component {
  state={
    initialData:"boom"
  }
  componentDidMount(){
    //initialData = setInitialData()
    //console.log("this is the initialData",initialData)
  }
  render(){
    if (initialData === 2){
    return(
      <View>
        <Text>{this.state.initialData}</Text>
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
