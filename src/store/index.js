import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default applyMiddleware(thunk)(createStore)(reducers, devTools);

//export default createStore(reducers, applyMiddleware(thunk))