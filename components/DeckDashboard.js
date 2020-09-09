import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setInitialData, getDecks } from '../utils/helper.js'
import { initialData } from '../utils/variables.js'

class DeckDashboard extends React.Component {
  state={
    initialData:null
  }
  componentDidMount(){
    const boomy = setInitialData()

    console.log("This is boomy",boomy)
    this.setState(()=>({
      initialData: boomy
    }))
  }
  render(){
    return(
      <View>
        <Text>Boom:{this.state.initialData}</Text>
      </View>
    )
  }
}

export default DeckDashboard
