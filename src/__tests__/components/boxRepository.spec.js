import React from 'react'
import { mount } from 'enzyme'

import BoxRepository from '../../components/boxRepository'

let repository
let wrapper

describe('-----BoxRepository-----', () => {

  beforeEach(() => {
    repository = {
      id: 1,
      name: 'nameRepo',
      description: 'descriptionRepo'
    }

    wrapper = mount(<BoxRepository repository={repository}/>)
  })

  it('should render correcty BoxRepository', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a repository property', () => {
    expect(wrapper.props().repository).toMatchObject(repository)
  })
})