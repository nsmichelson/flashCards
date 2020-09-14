import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { handleInitialData } from '../actions/'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import DeckSummaryCard from './deckSummaryCard.js'


class DeckDashboard extends React.Component {
  state={
    ready: true
    }

  componentDidMount(){
    this.props.handleInitialData()

  }

  render(){
    const { initialData } = this.props

    if(initialData !== null){
    return(
      <ScrollView style={styles.container}>
        {Object.keys(initialData).map((deck)=>{
            const { title } = initialData[deck]
            return (
              <TouchableOpacity
                key={deck}
                >
                <DeckSummaryCard deckTitle={title}  />
              </TouchableOpacity>

            )})}
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:60,
    paddingTop:80,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    backgroundColor:'purple'
  }
})

const mapStateToProps = (state) => {
  return (
    {initialData:state
    }
  )
}

export default connect(mapStateToProps, {handleInitialData})(DeckDashboard)
