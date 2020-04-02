import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export default function BoxRepository({ repository }) {
  return (
    <View style={styles.container}>
      <View style={styles.repositoryInfo}>
        <Text>{repository.name}</Text>
        <Text 
          style={styles.repositoryDescription} 
          numberOfLines={1}
        >{repository.description ? repository.description : 'Sem descrição'}
        </Text>
      </View>

      <View style={styles.nextIcon}>
        <AntDesign 
          name='arrowright' 
          size={20} 
          color='#000'
        />
      </View>
    </View>
  )
}