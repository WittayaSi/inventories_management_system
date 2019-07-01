import React from 'react'
import { Switch, Route } from 'react-router-dom'


import HomePage from './components/pages/HomePage'
import OfficePage from './components/pages/OfficePage'
import DepartmentPage from './components/pages/DepartmentPage'

import ItemPage from './components/pages/items/ItemPage'
import CategoryPage from './components/pages/categories/CategoryPage'

import DepreciationPage from './components/pages/depreciations/DepreciationPage'
import PersonalPage from './components/pages/personals/PersonalPage'

export default function Router() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/settings/office' component={OfficePage} />
            <Route exact path='/settings/department' component={DepartmentPage} />
            

            <Route exact path='/settings/items' component={ItemPage} />
            <Route exact path='/settings/categories' component={CategoryPage} />
            
            <Route exact path='/settings/depreciations' component={DepreciationPage} />

            <Route exact path='/settings/personals' component={PersonalPage} />
        </Switch>
    )
}
