import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { getRepositories } from '../../reducers/repositories/actions'

import styles from './styles'

import SearchRepository from '../../components/searchRepository'

export default function Home() {
  const [nickname, changeInput] = useState('')

  // const repositories = useSelector(state => state.repositories)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  // console.log(repositories)

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size='large' color='#0ff' /> */}
      <Text style={styles.title}>Busca de Repositórios</Text>
      
      <SearchRepository
        onChangeText={changeInput}
        dafaultValue={nickname}
      ></SearchRepository>

      <TouchableOpacity
        style={styles.searchButton}
        onPress={async () => {
          await dispatch(getRepositories(nickname))
          navigation.navigate('Profile')
        }}
      >
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>

      {/* <Text>{repositories.errorMessage}</Text> */}
    </View>
  );
}
