import React from 'react'
import { shallow } from 'enzyme'

import Repository from '../../pages/repository'
import MockNavigator from '../../__mocks__/mockNavigator'

let wrapper

describe('-----Repository-----', () => {

  beforeEach(() => {
    wrapper = shallow(<MockNavigator component={Repository} />)
  })

  it('should render correcty Rrepository page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})