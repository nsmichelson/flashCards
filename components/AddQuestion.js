import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import { addQuestion } from '../actions/'

class AddQuestion extends React.Component{
state={
  textQ:'Type a Question',
  textA:'Type an Answer'
}
handleSubmit = () => {
  const { deck } = this.props.route.params
  const { textQ, textA } = this.state
  const {navigation} = this.props.navigation
  const qObjectToSubmit = {
    question:textQ,
    answer:textA
  }
  this.props.dispatch(addQuestion(qObjectToSubmit,deck.title))
  navigation.goBack()
}
handleChangeTextQ= (textQ) =>{
  this.setState(()=>{
    return({
      textQ:textQ
      })
    })
  }
  handleChangeTextA= (textA) =>{
    this.setState(()=>{
      return({
        textA:textA
        })
      })
    }
render(){
  console.log("Checking the props in addQ",this.props)
  return (
    <View>
        <TextInput
          style={{fontSize:30,color:'blue',backgroundColor:'white'}}
          value={this.state.textQ}
          onChangeText={this.handleChangeTextQ}
        />
        <View style={{marginBottom:30}}></View>
        <TextInput
          style={{fontSize:30,color:'blue',backgroundColor:'white'}}
          value={this.state.textA}
          onChangeText={this.handleChangeTextA}
        />
        <Button
          onPress={this.handleSubmit}
          title="Create New Question"
          color="orange"
          />
    </View>
      )
    }
  }

export default connect()(AddQuestion)
