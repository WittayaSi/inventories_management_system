import React, { Component } from 'react'

import BreadCrumb from '../BreadCrumb'

export class Office extends Component {
    render() {
        return (
            <>

                <div className="ml-auto"><BreadCrumb basePage="ตั้งค่าระบบ" currentPage="ข้อมูลพื้นฐานของหน่วยงาน" /></div>

                <hr style={{borderTop: '5px solid', color: "grey"}}/> 

                <h1>Office Page</h1>
            </>
        )
    }
}

export default Office
