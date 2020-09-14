import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
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
    <Tabs.Screen name="DeckDashboard" component={DeckDashboard} />
    <Tabs.Screen name="AddDeck" component={AddDeck}/>
  </Tabs.Navigator>
)


const NavStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="NavTabs" component={NavTabs} />
      <Stack.Screen name="DeckDetails" component={DeckDetails}/>
    </Stack.Navigator>
 )


export default class Navigator extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    )
  }
}
