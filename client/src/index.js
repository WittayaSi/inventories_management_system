import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { getItem } from './actions/itemAction'
import { getCategory } from './actions/categoryAction'
import { getOffice } from './actions/officeAction'

import * as serviceWorker from './serviceWorker'

store.dispatch(getItem())
store.dispatch(getCategory())
store.dispatch(getOffice())


const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    app, 
    document.getElementById('root')
)

serviceWorker.unregister();

