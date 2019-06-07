import React, { Component } from 'react';
import { 
    Table, 
    Button,
    ButtonGroup 
} from 'reactstrap';
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
            <Table striped bordered>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>#</th>
                        <th style={{textAlign: "center"}}>Name</th>
                        <th style={{textAlign: "center"}}>Unit</th>
                        <th style={{textAlign: "center"}}>Price</th>
                        <th style={{textAlign: "center"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map((item, index) => (
                        <tr key={index}>
                            <th scope="row" style={{textAlign: "center", width: '10%'}}>{index+=1}</th>
                            <td style={{width: '50%'}}>{ item.item_name }</td>
                            <td style={{textAlign: "center", width: '10%'}}>{ item.item_unit }</td>
                            <td style={{textAlign: "center", width: '10%'}}>{ item.item_price }</td>
                            <td style={{textAlign: "center", width: '20%'}}>
                                <ButtonGroup size="sm">
                                    <Button color="danger" onClick={() => {
                                        if (window.confirm(`Are you sure to delete this item?`))
                                            this.onClickDelete(item.category_id, item._id)
                                    }}>ลบ</Button>  
                                    <UpdateItemModal item={item}/>
                                </ButtonGroup>
                            </td>
                        </tr>
                    )) }
                    
                </tbody>
            </Table>
        );

    }
}

export default connect(null, { deleteItem })(ItemTable)