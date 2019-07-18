import { combineReducers } from 'redux'

import itemReducer from './itemReducer'
import errorReducer from './errorReducer'
import categoryReducer from './categoryReducer'
import officeReducer from './officeReducer'

export default combineReducers({
    item: itemReducer,
    category: categoryReducer,
    error: errorReducer,
    office: officeReducer
})