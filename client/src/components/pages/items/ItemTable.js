import React, { Component } from 'react';
import { 
    Table, 
    Button,
    ButtonGroup 
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteItem } from '../../../actions/itemAction'

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
        const { items } = this.props
        return (
            <Table striped hover>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>#</th>
                        <th>ประเภทวัสดุ</th>
                        <th>ชื่อชนิดของวัสดุ</th>
                        <th style={{textAlign: "center"}}>หน่วยนับ</th>
                        <th style={{textAlign: "center"}}>ราคาต่อหน่วย</th>
                        <th style={{textAlign: "center"}}>ตัวเลือก</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, index) => (
                        <tr key={index}>
                            <td scope="row" style={{textAlign: "center", width: '5%'}}>{index+=1}</td>
                            <td style={{width: '25%'}}>{ item.category_name }</td>
                            <td style={{width: '40%'}}>{ item.item_name }</td>
                            <td style={{textAlign: "center", width: '8%'}}>{ item.item_unit }</td>
                            <td style={{textAlign: "center", width: '12%'}}>{ item.item_price }</td>
                            <td style={{textAlign: "center", width: '10%'}}>
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

export default connect(null, { deleteItem })(ItemTable)