import React from 'react'
import {View, Text, StyleSheet,Button, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/'


class AddDeck extends React.Component {
  state={
    text:''
  };

  handleChangeText= (text) =>{
    this.setState(()=>{
      return({
        text:text
        })
      })
    }
  handleSubmit = () => {
    const { navigation } = this.props
    const { text } = this.state
    this.props.dispatch(addDeck(text))

    this.setState(()=>{
      return({
        text:''
      })
    })

    navigation.goBack()
  }
  render(){
    return(
      <View>
        <View style={{fontSize:30,color:'white'}}>
          <Text style={{fontSize:45,color:'white'}}>
          What is the title of this deck?</Text>
            <TextInput
              style={{fontSize:30,color:'blue',backgroundColor:'white'}}
              value={this.state.text}
              onChangeText={this.handleChangeText}
            />
            <Button
              onPress={this.handleSubmit}
              title="Create New Deck"
              color="orange"
              />
          </View>

      </View>
      )
    }
  }


  export default connect()(AddDeck)
