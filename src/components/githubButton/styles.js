import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerGithubButton: {
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  githubButton: {
    width: 120,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  contentButton: {
    flexDirection: 'row'
  },
  contentButtonText: { 
    marginLeft: 10
  },
  contentButtonTextLabel: {
    fontSize: 13
  },
  contentButtonTextGithub: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})