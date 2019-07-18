import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addItem, setIsActionComplete } from '../../../actions/itemAction'
import { clearError } from '../../../actions/errorAction'

class AddItemModal extends Component {
    state = {
        modal: false,
        item: {
            category_id: null,
            item_name: '',
            item_unit: '',
            item_price: 0
        },
        err_message: null
    }

    static propTypes = {
        categories: PropTypes.array.isRequired,
        addItem: PropTypes.func.isRequired,
        setIsActionComplete: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired,
        isActionComplete: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isActionComplete } = this.props

        if(error !== prevProps.error) {
            if(error.id === 'ADD_ITEM'){
                this.setState({
                    err_message: error.message.message
                })
            }else{
                this.setState({
                    err_message: null
                })
            }
        }
        if(this.state.modal){
            if(isActionComplete){
                this.toggle()
                this.props.setIsActionComplete()
            }
        }
    } 

    // toggle add modal
    toggle = () => {
        // Clear all error when toggle modal
        this.props.clearError(this.state.modal)

        this.setState({
            modal: !this.state.modal,
            item: {
                ...this.state.item,
                category_id: null,
                item_code: '',
                item_name: '',
                item_unit: '',
                item_price: 0
            }
        })
    }

    onChange = e => {
        this.setState({
            item: {
               ...this.state.item,
                [e.target.name]: e.target.value 
            }
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const { item } = this.state
        
        // call add item action 
        this.props.addItem(item)
    }

    render() {
        const { categories } = this.props
        return (
            <>

                <Button color="primary" className="mb-3 mt-2 btn-block" onClick={this.toggle}>
                    เพิ่มชนิดของวัสดุ
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>เพิ่มชนิดของวัสดุ</ModalHeader>
                    <ModalBody>

                        { this.state.err_message ? 
                            <Alert color="danger">{ this.state.err_message }</Alert> 
                            : 
                            null 
                        }

                        <Form onSubmit={ this.onSubmit }>

                            <FormGroup>
                                <Label for="category_id">ประเภทวัสดุ <span style={{color: 'red'}}>*</span></Label>
                                <Input
                                    type="select"
                                    name="category_id"
                                    id="category_id"
                                    placeholder="Item Category"
                                    onChange={ this.onChange }
                                >
                                    <option value="">เลือกประเภทวัสดุ</option>
                                    {categories.map( (c, index) => (
                                        <option value={c._id} key={index}>{ c.category_name }</option>
                                    ))}
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="item_code">รหัสชนิดของวัสดุ</Label>
                                <Input
                                    type="text"
                                    name="item_code"
                                    id="item_code"
                                    placeholder="รหัสชนิดของวัสดุ"
                                    onChange={ this.onChange }
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="item_name">ชื่อชนิดของวัสดุ <span style={{color: 'red'}}>*</span></Label>
                                <Input
                                    type="text"
                                    name="item_name"
                                    id="item_name"
                                    placeholder="ชื่อชนิดของวัสดุ"
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="item_unit">หน่วยนับ <span style={{color: 'red'}}>*</span></Label>
                                <Input
                                    type="text"
                                    name="item_unit"
                                    id="item_unit"
                                    placeholder="หน่วยนับ"
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="item_price">ราคาต่อหน่วย</Label>
                                <Input
                                    type="number"
                                    step="any"
                                    name="item_price"
                                    id="item_price"
                                    value={this.state.item.item_price}
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    color="success"
                                    style={{
                                        marginTop: '2rem'
                                    }}
                                    className="btn-block"
                                >เพิ่ม</Button>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.category.categories,
    isActionComplete: state.item.isActionComplete,
    error: state.error
})

export default connect(mapStateToProps, { addItem, clearError, setIsActionComplete })(AddItemModal)
