import * as React from 'react'
import {createSwitchNavigator, createTabNavigator} from 'react-navigation-tabs'
import TransportRequestScreen from '../screens/TransportrRequestScreen'
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
export const AppTabNavigator = createTabNavigator({
    HomeScreen:{screen:HomeScreen},
    TransportRequestScreen:{screen:TransportRequestScreen},
    WelcomeScreen:{screen:WelcomeScreen}
})