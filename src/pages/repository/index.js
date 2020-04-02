import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import moment from 'moment'

import styles from './styles'

export default function Home() {
  const route = useRoute()
  const { repository } = route.params

  const navigation = useNavigation()
  const createdAt = moment(repository.created_at).format('DD/MM/YYYY')

  // stargazers_count
  // forks_count

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('Profile')}>
            <AntDesign
              name='arrowleft'
              size={30}
              color='#000'
            />
          </TouchableOpacity>
          <Text style={styles.repositoryName}>{repository.name}</Text>
        </View>

        <View style={styles.repositoryDetails}>
          <View style={styles.repositoryDetailsBox}>
            <View style={styles.repositoryDetailsItem}>
              <Text style={styles.repositoryDetailsItemText}>{repository.stargazers_count}</Text>
              <FontAwesome
                name='star'
                size={15}
                color='#000'
              />
            </View>
            <View style={styles.repositoryDetailsItem}>
              <Text style={styles.repositoryDetailsItemText}>{repository.forks_count}</Text>
              <FontAwesome
                name='code-fork'
                size={15}
                color='#000'
              />
            </View>
          </View>
          <View>
            {/*Procurar pelas closed_issues */}
            <Text style={styles.repositoryIssues}>Issues: {repository.open_issues} abertas / {repository.open_issues} fechadas</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.boxContent}>
          <Text style={styles.contentTitle}>Descrição</Text>
          <Text
            style={styles.contentDescription}
            numberOfLines={5}
          >{repository.description ? repository.description : 'Sem descrição'}</Text>
        </View>

        <View style={styles.boxContent}>
          <Text style={styles.contentTitle}>Linguagem</Text>
          <Text style={styles.contentDescription}>{repository.language}</Text>
        </View>

        <View style={styles.boxContent}>
          <Text style={styles.contentTitle}>Data de Criação</Text>
          <Text style={styles.contentDescription}>{createdAt}</Text>
        </View>
      </View>

    </View>
  );
}
