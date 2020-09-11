import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStarted, setInitialData, getDecks, getDeck, saveDeckTitle, addCardToDeck } from '../utils/helper.js'
import { initialData } from '../utils/variables.js'

class DeckDashboard extends React.Component {
  state={
    initialData:{}
    }


  async componentDidMount(){
    const resultos = await getStarted()
    this.setState(()=>({
      initialData: resultos
    }))
  }
  render(){
    const { initialData } = this.state

    if(initialData !== null){
    return(
      <View>
      {Object.keys(initialData).map((deck)=>{
          return (
            <Text key={deck}>{deck}</Text>
          )})}
      </View>
      )
    }
    else{
      return(
        <View>
        <Text>Not yet got intiial data</Text>
        </View>
      )
    }
  }
}

export default DeckDashboard
