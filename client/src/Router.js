import React from 'react'
import { Switch, Route } from 'react-router-dom'


import HomePage from './components/pages/HomePage'

import ItemPage from './components/pages/items/ItemPage'

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/item' component={ItemPage} />
        </Switch>
    )
}
