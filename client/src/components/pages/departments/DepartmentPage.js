import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import BreadCrumb from '../../BreadCrumb'
import AddDepartmentModal from './AddDepartmentModal'
import DepartmentTable from './DepartmentTable'

export class DepartmentPage extends Component {
    static propTypes = {
        departments: PropTypes.array.isRequired
    }
    render() {
        const { departments, loading } = this.props
        return (
            <>
                <div className="ml-auto"><BreadCrumb basePage="ตั้งค่าระบบ" currentPage="หน่วยงานเบิกสินทรัพย์" /></div>

                <hr style={{ borderTop: '5px solid', color: "grey" }} />

                <h1>Department Page</h1>
                { loading ? (<div style={{textAlign: "center"}}>Loading....</div>) : <DepartmentTable departments={departments} />}
                
                <br/>
                <AddDepartmentModal />
            </>
        )
    }
}

const mapStateToProps = state => ({
    departments: state.department.departments,
    loading: state.department.loading
})

export default connect(mapStateToProps,null)(DepartmentPage)
