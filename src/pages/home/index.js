import React, { useState, useEffect } from 'react'
import { Text, View, Button, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { getRepositories } from '../../reducers/repositories/actions'

import styles from './styles'

import SearchRepository from '../../components/searchRepository'

export default function Home() {
  const [nickname, changeInput] = useState('')

  // const repositories = useSelector(state => state.repositories)
  const dispatch = useDispatch()

  console.log(repositories)

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size='large' color='#0ff' /> */}
      <Text style={styles.title}>Buscar de Repositórios</Text>
      
      <SearchRepository
        onChangeText={changeInput}
        dafaultValue={nickname}
      ></SearchRepository>

      <Button
        title='Buscar'
        onPress={async () => {
          await dispatch(getRepositories(nickname))
          
        }}
      />

      {/* <Text>{repositories.errorMessage}</Text> */}
    </View>
  );
}
