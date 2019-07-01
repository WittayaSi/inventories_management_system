import React, { Component } from 'react'

import BreadCrumb from '../../BreadCrumb'

class DepreciationPage extends Component {
    render() {
        return (
            <>
                <div className="ml-auto"><BreadCrumb basePage="ตั้งค่าระบบ" currentPage="อายุการใช้งานและอัตราค่าเสื่อม" /></div>

                <hr style={{ borderTop: '5px solid', color: "grey" }} />

                <h1>Depreciation Rate Page</h1>
            </>
        )
    }
}

export default DepreciationPage
