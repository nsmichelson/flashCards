import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStarted, setInitialData, getDecks, getDeck, saveDeckTitle, addCardToDeck } from '../utils/helper.js'
import { initialData } from '../utils/variables.js'

class DeckDashboard extends React.Component {
  state={
    initialData:{"fart":{title:"fart",questions:[]}}
    }

  async componentDidMount(){
    return await getStarted()
    .then((resultos)=>{
        console.log("in the changing state function, supposed to happen AFTER everything else")
        this.setState(()=>({
        initialData: resultos
        }))
      })
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
