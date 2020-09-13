import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';


const DeckSummaryCard = (props) => {
  return (
    <View>
      <Text>This is a deck card for {props.deckTitle}</Text>
    </View>
  )
}

export default DeckSummaryCard
