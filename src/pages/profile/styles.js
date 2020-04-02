import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 260,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#d2e0e2',
    alignItems: 'center'
  },
  arrowBack: {
    alignSelf: 'stretch',
    marginTop: 20
  },  
  userAvatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#FFF'
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 24
  },
  content: {
    padding: 10
  },
  contentTitle: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 30
  },
  list: {
    marginBottom: 320,
  }
})