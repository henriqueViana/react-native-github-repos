import React from 'react'
import { shallow, mount } from 'enzyme'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import GithubButton from '../../components/githubButton'

describe('-----GithubButton-----', () => {
  it('should renders correcty SearchRepository', () => {
    const wrapper = shallow(<GithubButton />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a TouchableOpacity child component', () => {
    const wrapper = shallow(<GithubButton />)

    const childComponent = wrapper.find(TouchableOpacity)
    expect(childComponent).toHaveLength(1)
  })

  it('should render a AntDesign icon child component', () => {
    const wrapper = shallow(<GithubButton />)

    const childComponent = wrapper.find(AntDesign)
    expect(childComponent).toHaveLength(1)
  })

  it('should render a url property', () => {
    const url = 'https://github.com'
    const wrapper = mount(<GithubButton url={url} />)

    expect(wrapper.props().url).toEqual(url)
  })
})