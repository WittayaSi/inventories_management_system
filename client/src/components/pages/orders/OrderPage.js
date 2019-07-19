import React, { Component } from 'react'

import BreadCrumb from '../../BreadCrumb'

class OrderPage extends Component {
    render() {
        return (
            <>
                <div className="ml-auto"><BreadCrumb basePage="" currentPage="รายการเบิก-จ่าย" /></div>

                <hr style={{ borderTop: '5px solid', color: "grey" }} />

                <h1>Orders Page</h1>
            </>
        )
    }
}

export default OrderPage
