import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

class DeckQuiz extends React.Component {
  state={
    currentQuestion:0,
    numCorrect:0,
    showAnswer:false
  }
  render(){
    console.log("props props props props", this.props)
    const { deck } = this.props.route.params
    const questionKeys = Object.keys(deck.questions)

    let { showAnswer, currentQuestion, numCorrect } = this.state
    return (
      <View>
        {showAnswer===true ?
          <Text style={{fontSize:30, color:'white'}}>{deck.questions[currentQuestion].answer}</Text>
        :
          <Text style={{fontSize:30, color:'white'}}>{deck.questions[currentQuestion].question}</Text>
        }
        <Button
          onPress={this.onPressFlip}
          title={showAnswer ? "Flip to Question" : "Flip to Answer"}
          color="orange"
          />
        <View style={{flexDirection:'row'}}>
          <Button
            onPress={this.onPressCorrect}
            title="Mark Correct"
            color="green"
            />
          <Button
            onPress={this.onPressCorrect}
            title="Mark Incorrect"
            color="red"
            />
        </View>
      </View>
      )
    }
  }



export default connect()(DeckQuiz)
