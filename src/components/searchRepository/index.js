import React from 'react'
import { View, TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from './styles'

export default function SearchRepository(props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FontAwesome 
          name='search'
          size={15}
          color='#000'
        />
        <TextInput
          {...props}
          style={styles.input}
          placeholder='Nome do usuário'
        ></TextInput>
      </View>
    </View>
  )
}