import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getStarted, setInitialData, getDecks, getDeck, saveDeckTitle, addCardToDeck } from '../utils/helper.js'
import { initialData } from '../utils/variables.js'
import { handleInitialData } from '../actions/'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'



class DeckDashboard extends React.Component {
  state={
    initialData:{"fart":{title:"fart",questions:[]}}
    }

  componentDidMount(){
    this.props.handleInitialData()

  }
  render(){

    if(this.props.initialData !== null){
    return(
      <View>
      {Object.keys(this.props.initialData).map((deck)=>{
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

const mapStateToProps = (state) => {
  return (
    {initialData:state
    }
  )
}

export default connect(mapStateToProps, {handleInitialData})(DeckDashboard)
