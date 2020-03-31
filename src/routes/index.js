import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/home'
import Profile from '../pages/profile'
import Ropository from '../pages/repository'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Repository' component={Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}