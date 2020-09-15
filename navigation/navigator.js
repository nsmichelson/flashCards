import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import  DeckDashboard from '../components/DeckDashboard.js'
import AddDeck from '../components/AddDeck.js'
import DeckDetails from '../components/DeckDetails.js'
import { Ionicons } from '@expo/vector-icons'


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()


const NavTabs = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Deck Dashboard" component={DeckDashboard} />
    <Tabs.Screen name="Add Deck" component={AddDeck}/>
  </Tabs.Navigator>
)


const NavStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={NavTabs} />
      <Stack.Screen name="Deck Details" component={DeckDetails}/>
    </Stack.Navigator>
 )


export default class DaNavigator extends React.Component {
  render(){
    return (
      <NavigationContainer theme={DarkTheme}>
        <NavStack />
      </NavigationContainer>
    )
  }
}
