import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import SearchRepository from '../../components/SearchRepository'

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

  it('should render a defaultValue property', () => {
    const defaultValue = 'userName'
    const wrapper = mount(<SearchRepository defaultValue={defaultValue}/>)

    expect(wrapper.props().defaultValue).toEqual(defaultValue)
  })

  it('should render a change when onChangeText is dispatch', () => {
    const text = 'changedText'
    const onChangeText = jest.fn()
    
    const wrapper = shallow(<SearchRepository onChangeText={onChangeText}/>)
    wrapper.find(TextInput).simulate('changeText', text)

    expect(onChangeText).toHaveBeenCalledWith(text)
  })
})