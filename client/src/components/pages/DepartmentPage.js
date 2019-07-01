import React, { Component } from 'react'

import BreadCrumb from '../BreadCrumb'

export class DepartmentPage extends Component {
    render() {
        return (
            <>
                <div className="ml-auto"><BreadCrumb basePage="ตั้งค่าระบบ" currentPage="หน่วยงานเบิกสินทรัพย์" /></div>

                <hr style={{ borderTop: '5px solid', color: "grey" }} />

                <h1>Department Page</h1>
            </>
        )
    }
}

export default DepartmentPage
