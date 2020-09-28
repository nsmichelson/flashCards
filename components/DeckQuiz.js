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
  onPressRestartQuiz = () => {
      this.setState( ({numCorrect, currentQuestion}) =>{
        return {
          currentQuestion: 0,
          numCorrect: 0
        }
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
        numCorrect: numCorrect,
        showAnswer:false
      }
    })
  }
  render(){
    const { deck } = this.props.route.params
    const questionKeys = Object.keys(deck.questions)

    let { showAnswer, currentQuestion, numCorrect, total } = this.state
    if(currentQuestion!==total){
      // e 'Restart Quiz' and 'Back to Deck'
    return (
      <View>
        <View style={{marginBottom:40}}></View>

        {showAnswer===true ?
          <Text style={{fontSize:30, color:'white'}}>{deck.questions[currentQuestion].answer}</Text>
        :
          <Text style={{fontSize:30, color:'white'}}>{deck.questions[currentQuestion].question}</Text>
        }
        <View style={{marginBottom:40}}></View>

        <Button
          onPress={this.onPressFlip}
          title={showAnswer ? "Flip to Question" : "Flip to Answer"}
          color="orange"
          />
          <View style={{marginBottom:40}}></View>

        <View style={{flexDirection:'row', alignSelf:'center'}}>
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
        <View style={{marginBottom:40}}></View>

        <Text style={{fontSize:30, color:'white'}}>Total Correct:{numCorrect} of {currentQuestion}</Text>
      </View>
      )
    }
    else{
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:30, color:'white',marginBottom:10}}>You finished the deck!</Text>
          <Text style={{fontSize:30, color:'white'}}>Total Correct:{numCorrect} of {currentQuestion}</Text>
          <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Button
              onPress={this.onPressRestartQuiz}
              title="Restart Quiz"
              color="purple"
              />
            <Button
              onPress={this.onPressIncorrect}
              title="Back To Deck"
              color="orange"
            />
          </View>
        </View>
      )
    }
  }
}



export default connect()(DeckQuiz)
