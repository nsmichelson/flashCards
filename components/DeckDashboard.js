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
    setInitialData()
      .then((results)=>{
        console.log("this is what we got from getitems",results)
        const resultos = JSON.parse(results)
        console.log("RESULTS are",resultos)
        this.setState(()=>({
          initialData: resultos
        }))
      })
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
