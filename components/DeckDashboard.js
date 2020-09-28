import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { handleInitialData } from '../actions/'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import DeckSummaryCard from './deckSummaryCard.js'
import { LinearGradient } from 'expo-linear-gradient';
import DeckDetails from './DeckDetails.js'



class DeckDashboard extends React.Component {
  state={
    width: new Animated.Value(200),
    }

  componentDidMount(){
    this.props.handleInitialData()
    const { width }  = this.state
    Animated.spring(width, { toValue: 300, speed:3, useNativeDriver:false}).start()


  }

  render(){
    const { initialData } = this.props
    const { width, height } = this.state

    if(initialData !== null){
    return(
      <View  style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.center} style={styles.container} >
       <LinearGradient
            colors={['rgba(255, 0, 255,0.3)', 'purple']}
            style={styles.gradientBox}
          />

        {Object.keys(initialData).map((deck)=>{
            const { title } = initialData[deck]
            const numinDeck = initialData[deck].questions.length
            return (
              <Animated.View
                style={{width}}
                key={title}
                >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Deck Details', {deck:deck})
                  }
                }
                >
                <DeckSummaryCard  deckTitle={title} num={numinDeck} />
              </TouchableOpacity>
              </Animated.View>

            )})}
      </ScrollView>
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

const styles = StyleSheet.create({
  center:{
    alignItems:'center'
  },
  container: {
    flex:1,
    marginTop:60,
    backgroundColor:'purple',
    width:420,
  },
  gradientBox: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 500
    }
})

const mapStateToProps = (state) => {
  return (
    {initialData:state
    }
  )
}

export default connect(mapStateToProps, {handleInitialData})(DeckDashboard)
