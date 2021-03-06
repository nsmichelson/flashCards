import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/notification.js'


class DeckDetails extends React.Component {
  onPressQuiz = () =>{
    this.props.navigation.navigate('Deck Quiz', {deck:this.props.deck})
    //when press quiz clear and reset notification reminder
    clearLocalNotification()
    .then(setLocalNotification)

  }
  onPressAddCard = () => {
    this.props.navigation.navigate('Add Question', {deck:this.props.deck})
  }
  render(){
    const { deck } = this.props

  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:-80}}>
      <Text style={{color:"white", fontSize:50, alignSelf:'center'}}>{deck.title}</Text>
      <Text style={{color:"white", fontSize:30, alignSelf:'center'}}>{deck.questions.length} cards</Text>
      <Button
        onPress={this.onPressQuiz}
        title="Quiz Me"
        color="orange"
        />
      <Button
        onPress={this.onPressAddCard}
        title="Add Card"
        color="purple"
        />
    </View>
    )
  }
}

const mapStateToProps = (state, { route }) => {
  const title = route.params.deck
  const deck = state[title]
    return ({
      deck:deck
      })
    }


export default connect(mapStateToProps)(DeckDetails)
