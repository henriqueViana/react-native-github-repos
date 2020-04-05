import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Repository from '../pages/Repository'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Repository' component={Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}