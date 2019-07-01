import React, { Component } from 'react'

import BreadCrumb from '../BreadCrumb'

export default class HomePage extends Component {
    render() {
        return (
            <>
                
                <div className="ml-auto"><BreadCrumb /></div>

                <hr style={{borderTop: '5px solid', color: "grey"}}/>

                <h1>Dashboard</h1>
                
            </>
        )
    }
}
