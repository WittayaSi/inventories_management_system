import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const initState = {}
const middleware = [thunk]
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        devTools
    )
)

export default store