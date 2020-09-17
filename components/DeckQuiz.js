import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

class DeckQuiz extends React.Component {
  state={
    currentQuestion:0,
    numCorrect:0,
    showAnswer:false,
    total:0
  }

  componentDidMount(){
    const { deck } = this.props.route.params

    const totalQ = deck.questions.length
    this.setState(()=>{
      return ({
      total: totalQ
      })
    })}

  onPressFlip = () => {
      this.setState( ({showAnswer}) =>{
        return {
          showAnswer: !showAnswer}
      })
    }
  onPressCorrect = () => {
    this.setState( ({numCorrect, currentQuestion}) =>{
      return {
        currentQuestion: currentQuestion + 1,
        numCorrect: numCorrect + 1
      }
    })
  }
  onPressIncorrect = () => {
    this.setState( ({numCorrect, currentQuestion}) =>{
      return {
        currentQuestion: currentQuestion + 1,
        numCorrect: numCorrect
      }
    })
  }
  render(){
    const { deck } = this.props.route.params
    const questionKeys = Object.keys(deck.questions)

    let { showAnswer, currentQuestion, numCorrect, total } = this.state
    if(currentQuestion!==total){
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
        <Text style={{fontSize:30, color:'white'}}>Total Correct:{numCorrect} of {currentQuestion}</Text>
      </View>
      )
    }
    else{
      return(
        <Text style={{fontSize:30, color:'white'}}>You finished the deck!</Text>
      )
    }
  }
}



export default connect()(DeckQuiz)
