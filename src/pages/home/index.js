import React, { useState } from 'react'
import { Text, View, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { getRepositories } from '../../reducers/repositories/actions'

import styles from './styles'

import SearchRepository from '../../components/SearchRepository'

export default function Home() {
  const [userName, changeInput] = useState('')
  const [loading, showLoading] = useState(false)
  const [goNextPage, setGoNextPage] = useState(false)

  const repositories = useSelector(state => state.repositories)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const searchRepositoryAction = async () => {
    Keyboard.dismiss()
    beforeGetRepositories()
    await dispatch(getRepositories(userName))
    afterGetRepositories()
  }

  const beforeGetRepositories = () => {
    showLoading(true)
    setGoNextPage(true)
  }

  const afterGetRepositories = () => {
    showLoading(false)
    setGoNextPage(false)
  }

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
        onPress={async () => searchRepositoryAction()}
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
