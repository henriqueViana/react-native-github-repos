import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import BoxRepository from '../../components/BoxRepository' 

import { clearRepositories } from '../../reducers/repositories/actions'

import styles from './styles'

export default function Profile() {
  const repositories = useSelector(state => state.repositories)
  const navigation = useNavigation()
  const userAvatarUri = repositories.length > 0 && repositories[0].owner.avatar_url
  const userName = repositories.length > 0 && repositories[0].owner.login

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.arrowBack}>
          <TouchableOpacity 
            onPress={() => {
                navigation.navigate('Home')
                dispatch(clearRepositories())
              }
            }
          >
            <AntDesign 
              name='arrowleft' 
              size={30} 
              color='#000'
            />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.userAvatar}
          source={{uri: userAvatarUri}}
        ></Image>
        <Text style={styles.userName}>{userName}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Repositórios</Text>
        <FlatList 
          style={styles.list}
          data={repositories}
          showsVerticalScrollIndicator={false}
          keyExtractor={repository => String(repository.id)}
          renderItem={({ item: repository }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Repository', { repository })}>
              <BoxRepository repository={repository}/>
            </TouchableOpacity> 
          )}
        />
      </View>
      
    </View>
  );
}
