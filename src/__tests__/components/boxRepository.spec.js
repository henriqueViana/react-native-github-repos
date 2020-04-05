import React from 'react'
import { shallow } from 'enzyme'
import { Entypo } from '@expo/vector-icons'
import { Text } from 'react-native'

import BoxRepository from '../../components/BoxRepository'

let repository
let wrapper

describe('-----BoxRepository-----', () => {

  beforeEach(() => {
    repository = {
      id: 1,
      name: 'nameRepo',
      description: 'descriptionRepo'
    }

    wrapper = shallow(<BoxRepository repository={repository}/>)
  })

  it('should render correcty BoxRepository', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a Entypo child compoent', () => {
    const childComponent = wrapper.find(Entypo)
    expect(childComponent).toHaveLength(1)
  })

  it('should render two Text child component with title and description of the repository', () => {
    const childComponent = wrapper.find(Text)
    expect(childComponent).toHaveLength(2)
  })
})