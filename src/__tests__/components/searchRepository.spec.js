import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import SearchRepository from '../../components/SearchRepository'

describe('-----SearchRepository-----', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<SearchRepository />)
  })

  it('should renders correcty SearchRepository', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a TextInput child component', () => {
    const childComponent = wrapper.find(TextInput)
    expect(childComponent).toHaveLength(1)
  })

  it('should render a FontAwesome icon child component', () => {
    const childComponent = wrapper.find(FontAwesome)
    expect(childComponent).toHaveLength(1)
  })  

  it('should render a change when onChangeText is dispatch', () => {
    const text = 'changedText'
    const onChangeText = jest.fn()
    
    const wrapperWithProps = shallow(<SearchRepository onChangeText={onChangeText}/>)
    wrapperWithProps.find(TextInput).simulate('changeText', text)

    expect(onChangeText).toHaveBeenCalledWith(text)
  })
})