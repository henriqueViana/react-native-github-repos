import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import SearchRepository from '../../components/searchRepository'

describe('-----SearchRepository-----', () => {

  it('should renders correcty SearchRepository', () => {
    const wrapper = shallow(<SearchRepository />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a TextInput child component', () => {
    const wrapper = shallow(<SearchRepository />)

    const childComponent = wrapper.find(TextInput)
    expect(childComponent).toHaveLength(1)
  })

  it('should render a FontAwesome icon child component', () => {
    const wrapper = shallow(<SearchRepository />)

    const childComponent = wrapper.find(FontAwesome)
    expect(childComponent).toHaveLength(1)
  })  
})