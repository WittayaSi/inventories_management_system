import React, { Component } from 'react';
import { 
    Table, 
    Button,
    ButtonGroup 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteItem, updateItem } from '../../../actions/itemAction'

import UpdateItemModal from './UpdateItemModal'

class ItemTable extends Component {

    static propTypes = {
        deleteItem: PropTypes.func.isRequired
    }

    onClickDelete = (category_id, item_id) => {
        //console.log(`Will delete item id is : ${id}`)
        this.props.deleteItem(category_id, item_id)
    }

    render() {
        const { items, updateItem } = this.props
        return (
            <Table striped hover>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>#</th>
                        { window.location.pathname === "/settings/items" ?  (<th>ประเภทวัสดุ</th>) : null }
                        <th>ชื่อชนิดของวัสดุ</th>
                        <th style={{textAlign: "center"}}>หน่วยนับ</th>
                        <th style={{textAlign: "center"}}>ราคาต่อหน่วย</th>
                        <th style={{textAlign: "center"}}>ตัวเลือก</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, index) => (
                        <tr key={index}>
                            <td scope="row" style={{textAlign: "center", wordWrap: "break-word"}}>{index+=1}</td>
                            {  window.location.pathname === "/settings/items" ? (<td style={{wordWrap: "break-word"}}>{ item.category_name }</td>) : null}   
                            <td style={{wordWrap: "break-word"}}>{ item.item_name }</td>
                            <td style={{textAlign: "center", wordWrap: "break-word"}}>{ item.item_unit }</td>
                            <td style={{textAlign: "center", wordWrap: "break-word"}}>{ item.item_price }</td>
                            <td style={{textAlign: "center", wordWrap: "break-word"}}>
                                <a href="#" onClick={() => updateItem(item.category_id, item._id, {item_status: item.item_status})}>
                                    <FontAwesomeIcon icon={item.item_status === "active" ? faEye : faEyeSlash} color="primary"/>
                                </a>
                                &nbsp;
                                <UpdateItemModal item={item}/> 
                                &nbsp;
                                <a href="#" onClick={() => {
                                        if (window.confirm(`Are you sure to delete this item?`))
                                            this.onClickDelete(item.category_id, item._id)
                                    }}>
                                    <FontAwesomeIcon icon={faTrashAlt} color="red"/>
                                </a>
                                {/* <ButtonGroup size="sm">
                                    <Button color="danger" onClick={() => {
                                        if (window.confirm(`Are you sure to delete this item?`))
                                            this.onClickDelete(item.category_id, item._id)
                                    }}><FontAwesomeIcon icon={faEdit} /></Button>  
                                    <UpdateItemModal item={item}/>
                                </ButtonGroup> */}
                            </td>
                        </tr>
                    )) }
                    
                </tbody>
            </Table>
        );

    }
}

export default connect(null, { deleteItem, updateItem })(ItemTable)