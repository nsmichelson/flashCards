import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { setInitialData, getDecks, getDeck, saveDeckTitle, addCardToDeck } from '../utils/helper.js'
import { initialData } from '../utils/variables.js'

class DeckDashboard extends React.Component {
  state={
    initialData:{}
    }

  getAndLogData = () => {
    return getDecks()
    //.then(getDecks)
    .then((results)=>{
      const resultos = JSON.parse(results)
      console.log("RESULTS RESULTS RESULTS ARE:",resultos)
      this.setState(()=>({
        initialData: resultos
      }))
    })
  }
  componentDidMount(){
    const qToAdd = {
      question: 'Boom?',
      answer: 'Boomba Boom'
    }
    return setInitialData()
      .then(saveDeckTitle('Boooom'))
      .then(addCardToDeck('Boooom',qToAdd))
      .then(()=>{
        console.log("should have added card now!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        this.getAndLogData()
    })
  }
  render(){
    const { initialData } = this.state
    const deckers = Object.keys(initialData)
    return(
      <View>
      {deckers.map((deck)=>{
          return (
            <Text key={deck}>{deck}</Text>
          )})}
      </View>
      )
    }
  }

export default DeckDashboard
