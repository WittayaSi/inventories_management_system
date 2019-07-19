import React, { Component } from 'react';
import { 
    Table
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
//import { deleteItem, updateItem } from '../../../actions/itemAction'

class DepartmentTable extends Component {

    // static propTypes = {
    //     deleteItem: PropTypes.func.isRequired
    // }

    onClickDelete = (id) => {
        console.log(`Will delete item id is : ${id}`)
        //this.props.deleteItem(category_id, item_id)
    }

    render() {
        const { departments } = this.props
        return (
            <Table striped hover>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>#</th>
                        <th>หน่วยงาน</th>
                        <th>รหัสหน่วยงาน</th>
                        <th>หัวหน้าหน่วยงาน</th>
                        <th>ตำแหน่ง</th>
                        <th style={{textAlign: "center"}}>ตัวเลือก</th>
                    </tr>
                </thead>
                <tbody>
                    { departments.map((department, index) => (
                        <tr key={index}>
                            <td scope="row" style={{textAlign: "center", wordWrap: "break-word"}}>{index+=1}</td> 
                            <td style={{wordWrap: "break-word"}}>{ department.name }</td>
                            <td style={{wordWrap: "break-word"}}>{ department.code }</td>
                            <td style={{wordWrap: "break-word"}}>{ department.chief_name }</td>
                            <td style={{wordWrap: "break-word"}}>{ department.chief_position }</td>
                            <td style={{textAlign: "center", wordWrap: "break-word"}}>
                                {/* <a href="#" onClick={() => updateItem(item.category_id, item._id, {item_status: item.item_status})}>
                                    <FontAwesomeIcon icon={item.item_status === "active" ? faEye : faEyeSlash} color="primary"/>
                                </a>
                                &nbsp; */}
                                {/* <UpdateItemModal item={item}/> 
                                &nbsp; */}
                                <a href="#" onClick={() => {
                                        if (window.confirm(`Are you sure to delete this department?`))
                                            this.onClickDelete(department._id)
                                    }}>
                                    <FontAwesomeIcon icon={faTrashAlt} color="red"/>
                                </a>
                            </td>
                        </tr>
                    )) }
                    
                </tbody>
            </Table>
        );

    }
}

export default DepartmentTable