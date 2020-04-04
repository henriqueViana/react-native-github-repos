import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { getRepositories } from '../../reducers/repositories/actions'

import styles from './styles'

import SearchRepository from '../../components/searchRepository'

export default function Home() {
  const [userName, changeInput] = useState('')
  const [loading, showLoading] = useState(false)
  const [goNextPage, setGoNextPage] = useState(false)

  const repositories = useSelector(state => state.repositories)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {loading && 
        <View style={styles.loading}>
          <ActivityIndicator 
            size='large' 
            color='#0ff'
          />
        </View>
      }
      <Text style={styles.title}>Busca de Repositórios</Text>
      
      <SearchRepository
        onChangeText={changeInput}
        defaultValue={userName}
      ></SearchRepository>

      <TouchableOpacity
        style={styles.searchButton}
        onPress={async () => {
          showLoading(true)
          setGoNextPage(true)
          await dispatch(getRepositories(userName))
          showLoading(false)
          setGoNextPage(false)

        }}
      >
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>

      <Text style={styles.errorMessage}>{repositories.errorMessage}</Text>

      {!repositories.errorMessage && 
        repositories.length > 0 && 
        goNextPage && navigation.navigate('Profile')}

    </View>
  );
}
