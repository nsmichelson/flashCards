import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'


class DeckDetails extends React.Component {
  render(){
    console.log("These are the props",this.props)

  return(
    <View>
    <Text style={{color:"white"}}>{this.props.route.params.deck}</Text>
    </View>
    )
  }
}

export default DeckDetails
