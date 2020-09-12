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
    try {
    const resultos = await getStarted()
     try{
      if(resultos){
        this.setState(()=>({
        initialData: resultos
        }))
        }
      else{
        console.log("Just tried to set state but didn't have what needed")
      }
    }
      catch(e){
        console.log("inner error is:",e)
      }
    }catch(e){
      console.log("outer error is",e)
    }
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
