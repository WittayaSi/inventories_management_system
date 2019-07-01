import React, { Component } from 'react'
import BreadCrumb from '../../BreadCrumb'

class PersonalPage extends Component {
    render() {
        return (
            <>
                <div className="ml-auto"><BreadCrumb basePage="ตั้งค่าระบบ" currentPage="ข้อมูลบุคลากร" /></div>

                <hr style={{ borderTop: '5px solid', color: "grey" }} />

                <h1>Personal Page</h1>
            </>
        )
    }
}

export default PersonalPage
