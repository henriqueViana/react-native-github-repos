import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 36
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#61dafb',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FFF'
  }, 
  searchButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  errorMessage: {
    marginTop: 20,
    fontWeight: 'bold',
    color: '#cb2431'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    opacity: .8,
    position: 'absolute',
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
    zIndex: 2,
  }
})