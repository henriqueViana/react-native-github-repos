import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingTop: 40,
    backgroundColor: '#d2e0e2',
    height: 130,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  arrow: {
    flexGrow: 1,
  },
  repositoryName: {
    flexGrow: 1,
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: -30
  },
  repositoryDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  repositoryDetailsBox: {
    flexDirection: 'row',
  },
  repositoryDetailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  repositoryDetailsItemText: {
    marginRight: 5,
    fontSize: 18
  },
  repositoryIssues: {
    fontSize: 11
  },  
  content: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  boxContent: {
    marginBottom: 40
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentDescription: {
    color: '#999',
    marginTop: 5,
  }
})
