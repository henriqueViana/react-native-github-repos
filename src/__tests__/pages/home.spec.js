import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'

import Home from '../../pages/home'
import mockStore from '../../__mocks__/mockStore'
import MockNavigator from '../../__mocks__/mockNavigator'

let store
let wrapper

describe('-----Home-----', () => {

  beforeEach(() => {
    store = mockStore

    wrapper = shallow(
      <Provider store={store}>
        <MockNavigator component={Home} />
      </Provider>
    )
  });

  it('should renders correcty HomePage', () => {
    expect(wrapper).toMatchSnapshot()
  })
})