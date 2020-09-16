import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

class DeckQuiz extends React.Component {
  state={
    currentQuestion:0,
    numCorrect:0,
    showAnswer:false
  }
  onPressFlip = () => {
    console.log("Press happened")
    console.log("This is the current state",this.state.showAnswer)
      this.setState((prevState)=>{
        console.log("what is prevState",prevState)
        const newState = !prevState.showAnswer
        console.log("this is the new state",newState)
        return {
          showAnswer: newState}
      })
    }
  render(){
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
            onPress={this.onPressIncorrect}
            title="Mark Incorrect"
            color="red"
            />
        </View>
      </View>
      )
    }
  }



export default connect()(DeckQuiz)
