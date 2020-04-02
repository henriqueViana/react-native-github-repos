import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
  },
  repositoryInfo: {
    flex: 0,
    flexGrow: 5,
    width: 100,
  },
  repositoryDescription: {
    fontSize: 13,
    color: '#ccc',
    marginTop: 5,
  },
  nextIcon: {
    flex: 0,
    flexGrow: 1,
    alignItems: 'flex-end'
  }
})