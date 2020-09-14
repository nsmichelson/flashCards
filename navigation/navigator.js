import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  DeckDashboard from '../components/DeckDashboard.js'
//import AddDeck from '../components/AddDeck.js'
//import DeckDetails from '../components/DeckDetails.js'


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()


const NavTabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="DeckDashboard" component={DeckDashboard} />
  </Tabs.Navigator>
)

//  //    <Stack.Screen name="Deck Details" component={DeckDetails}/>
//  <Tabs.Screen name="AddDeck" component={AddDeck}/>


const NavStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={NavTabs} />
    </Stack.Navigator>
 )


export default class TheNavigator extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    )
  }
}
