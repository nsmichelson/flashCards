import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setInitialData, getDecks } from '../utils/helper.js'
import { initialData } from '../utils/variables.js'

class DeckDashboard extends React.Component {
  state={
    initialData:"blah"
    }
  componentDidMount(){
    setInitialData()
      .then(getDecks)
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
    const { initialData } = this.state
    return(
      <View>
        <Text>Boom:</Text>
      </View>
      )
    }
  }

export default DeckDashboard
