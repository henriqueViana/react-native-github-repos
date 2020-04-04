import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'

export default function GithubButton({ url }) {
  return (
    <View style={styles.containerGithubButton}>
      <View style={styles.githubButton}>
        <TouchableOpacity
          onPress={() => Linking.openURL(url)}
        >
          <View style={styles.contentButton}>
            <AntDesign
              name='github'
              size={40}
              color='#000'
            />
            <View style={styles.contentButtonText}>
              <Text style={styles.contentButtonTextLabel}>Abrir no</Text>
              <Text style={styles.contentButtonTextGithub}>GitHub</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}