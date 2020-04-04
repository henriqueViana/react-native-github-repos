import React from 'react'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  repositories: []
};

export default mockStore(storeStateMock)