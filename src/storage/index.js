import React from 'react'
import { AsyncStorage } from 'react-native';

export const getItem = async userName => {
  try {
    return await AsyncStorage.getItem(userName)
  } catch (error) {
    throw error
  }
}

export const setItem = (userName, data) => {
  try {
    AsyncStorage.setItem(userName, JSON.stringify(data))
  } catch (error) {
    throw error
  }
}