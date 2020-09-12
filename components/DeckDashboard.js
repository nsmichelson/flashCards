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
    setTimeout(()=>{
      console.log("these are the results",resultos)
    },4000)
      setTimeout(()=>{
        this.setState(()=>({
        initialData: resultos
      }))},5000)
  }
  render(){

    if(this.state.initialData !== null){
    return(
      <View>
      {Object.keys(this.state.initialData).map((deck)=>{
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
