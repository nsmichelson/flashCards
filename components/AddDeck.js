import React from 'react'
import {View, Text, StyleSheet,Button, TextInput} from 'react-native'

export default class AddDeck extends React.Component {
  state={
    text:''
  }
  handleChangeText= ({text}) =>{
    this.setState(()=>{
      return({
        text:text
      })
    })
    }
  render(){
    return(
      <View>
        <View style={{fontSize:30,color:'white'}}>
            <TextInput
              style={{fontSize:30,color:'blue',backgroundColor:'white'}}
              value={this.state.text}
              onChangeText={this.handleChangeText}
            />
          </View>

      </View>
      )
    }
  }
