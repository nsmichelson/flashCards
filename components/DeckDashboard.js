import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { handleInitialData } from '../actions/'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import DeckSummaryCard from './deckSummaryCard.js'



class DeckDashboard extends React.Component {
  state={
    initialData:{}
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
            <DeckSummaryCard deckTitle="test" key={deck}>{deck}</DeckSummaryCard>
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
