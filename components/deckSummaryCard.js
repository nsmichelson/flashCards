import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const DeckSummaryCard = (props) => {
  return (
    <View style={styles.summaryCard}>

      <Text style={{fontSize:30}}>{props.deckTitle}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  summaryCard: {
    flex: 1,
    width:250,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    borderColor:'purple',
    borderRadius:20,
    marginTop:10,
    marginBottom:20,
    minHeight:120,
    maxHeight:150
  },
});

export default DeckSummaryCard
