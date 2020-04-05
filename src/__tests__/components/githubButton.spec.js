import React from 'react'
import { shallow, mount } from 'enzyme'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import GithubButton from '../../components/GithubButton'

describe('-----GithubButton-----', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<GithubButton />)
  })

  it('should renders correcty GithubButton', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a TouchableOpacity child component', () => {
    const childComponent = wrapper.find(TouchableOpacity)
    expect(childComponent).toHaveLength(1)
  })

  it('should render a AntDesign icon child component', () => {
    const childComponent = wrapper.find(AntDesign)
    expect(childComponent).toHaveLength(1)
  })
})