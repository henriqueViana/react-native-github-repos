import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import Profile from '../../pages/profile'
import mockStore from '../../__mocks__/mockStore'
import MockNavigator from '../../__mocks__/mockNavigator'

let store
let wrapper

describe('-----Home-----', () => {

  beforeEach(() => {
    store = mockStore

    wrapper = shallow(
      <Provider store={store}>
        <MockNavigator component={Profile} />
      </Provider>
    )
  });

  it('should renders correcty Profile Page', () => {
    expect(wrapper).toMatchSnapshot()
  })
})