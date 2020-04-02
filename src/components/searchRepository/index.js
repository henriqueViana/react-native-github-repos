import React from 'react'
import { View, TextInput } from 'react-native'

import styles from './styles'

export default function SearchRepository(props) {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
      ></TextInput>
    </View>
  )
}