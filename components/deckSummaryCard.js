import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const DeckSummaryCard = (props) => {
  return (
    <View style={styles.container}>
    <LinearGradient
         // Background Linear Gradient
         colors={['rgba(255, 165, 0,0.8)', 'yellow']}
         style={{
           position: 'absolute',
           left: 0,
           right: 0,
           top: 0,
           height: 120,
         }}
       />
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
    minHeight:120,
  },
});

export default DeckSummaryCard
