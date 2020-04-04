import React from 'react'
import renderer from 'react-test-renderer'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import MockNavigator from '../../__mocks__/mockNavigator'
import { shallow } from 'enzyme'


import Home from '../../pages/home'
import SearchRepository from '../../components/searchRepository'


const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  repositories: []
};

let store
let component
let configComponent

describe('-----Home-----', () => {

  beforeEach(() => {
    store = mockStore(storeStateMock)

    configComponent = (
      <Provider store={store}>
        <MockNavigator component={Home} />
      </Provider>
    )

    component = shallow(configComponent)
  });

  it('should renders correcty HomePage', () => {
    const { toJSON } = renderer.create(configComponent)
    expect(toJSON()).toMatchSnapshot()
  })

  // it('should have a SearchRepository component rendered', () => {
  //   const childComponent = component.find(NavigationContainer)
  //   expect(childComponent).toHaveLength(1)
  // })
})