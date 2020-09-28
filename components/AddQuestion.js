import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';
import { addQuestion } from '../actions/'
import { addCardToDeck } from '../utils/helper.js'


class AddQuestion extends React.Component{
state={
  textQ:'Type a Question',
  textA:'Type an Answer'
}
handleSubmit = () => {
  const { deck } = this.props.route.params
  const { textQ, textA } = this.state
  const {navigation} = this.props
  const qObjectToSubmit = {
    question:textQ,
    answer:textA
  }
  addCardToDeck(deck.title, qObjectToSubmit)
  .then(()=>{
    this.props.dispatch(addQuestion(qObjectToSubmit,deck.title))
  })
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
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <View style={{marginBottom:140}}></View>
        <TextInput
          style={{fontSize:20,color:'orange',backgroundColor:'white',padding:10,width:300}}
          value={this.state.textQ}
          onChangeText={this.handleChangeTextQ}
          selectTextOnFocus={true}
        />
        <View style={{marginBottom:30}}></View>
        <TextInput
          style={{fontSize:20,color:'orange',backgroundColor:'white',padding:10,width:300}}
          value={this.state.textA}
          onChangeText={this.handleChangeTextA}
          selectTextOnFocus={true}
        />
        <TouchableOpacity
                style={{
                marginTop:50,
                width:250,
                alignSelf:'center',
                backgroundColor:'black',
                borderColor:'orange',
                padding:20,
                borderRadius:30,
                borderWidth:2,
                justifyContent: 'center',
                alignItems:'center'
                }}
                onPress = {this.handleSubmit}
                >
          <Text style={{fontSize:20,color:'orange'}}>Add Question To Deck</Text>
        </TouchableOpacity>
      </View>
        )
      }
    }

export default connect()(AddQuestion)
