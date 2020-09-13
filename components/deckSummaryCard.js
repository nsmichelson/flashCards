import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const DeckSummaryCard = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is a deck card for {props.deckTitle}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:'purple',
    borderRadius:10,
    marginBottom:10,
    flexBasis:120,
    minHeight:120
  },
});

export default DeckSummaryCard
