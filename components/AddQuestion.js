import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput } from 'react-native';

class AddQuestion extends React.Component{
state={
  textQ:'Type a Question',
  textA:'Type an Answer'
}
render(){
  return (
    <View>
        <TextInput
          style={{fontSize:30,color:'blue',backgroundColor:'white'}}
          value={this.state.textQ}
          onChangeText={this.handleChangeText}
        />
        <TextInput
          style={{fontSize:30,color:'blue',backgroundColor:'white'}}
          value={this.state.textA}
          onChangeText={this.handleChangeText}
        />
        <Button
          onPress={this.handleSubmit}
          title="Create New Deck"
          color="orange"
          />
    </View>
  )
}
}

export default AddQuestion
