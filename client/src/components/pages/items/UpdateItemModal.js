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

import { updateItem, setIsActionComplete } from '../../../actions/itemAction'
import { clearError } from '../../../actions/errorAction'

class UpdateItemModal extends Component {
    state = {
        modal: false,
        item: {
            item_name: '',
            item_unit: '',
            item_price: 0
        },
        err_message: null
    }
    
    static propTypes = {
        updateItem: PropTypes.func.isRequired,
        clearError: PropTypes.func.isRequired,
        isActionComplete: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }
    
    componentDidUpdate(prevProps) {
        const { error, isActionComplete } = this.props
        
        if(error !== prevProps.error) {
            if(error.id === 'UPDATE_ITEM'){
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
                this.dispatch(setIsActionComplete())
            }
        }
    } 

    // toggle add modal
    toggle = () => {
        // Clear all error when toggle modal
        this.props.clearError()
        this.setState({
            modal: !this.state.modal,
        });
    }

    onClickToggleModal = () => {
        
        const { item_name, item_unit, item_price } = this.props.item
        
        this.setState({
            item: {
                item_name,
                item_unit,
                item_price
            }
        })

        this.toggle()
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
        const { _id } = this.props.item
        this.props.updateItem(_id, item)
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.onClickToggleModal}>
                    แก้ไข
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>UPDATE ITEM</ModalHeader>
                    <ModalBody>

                        { this.state.err_message ? 
                            <Alert color="danger">{ this.state.err_message }</Alert> 
                            : 
                            null 
                        }

                        <Form onSubmit={ this.onSubmit }>

                            <FormGroup>
                                <Label for="item_name">Item Name</Label>
                                <Input
                                    type="text"
                                    name="item_name"
                                    id="item_name"
                                    placeholder="Item Name"
                                    value={this.state.item.item_name}
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="item_unit">Item Unit</Label>
                                <Input
                                    type="text"
                                    name="item_unit"
                                    id="item_unit"
                                    placeholder="Item Unit"
                                    value={this.state.item.item_unit}
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="item_price">Item Price</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    max="50000"
                                    name="item_price"
                                    id="item_price"
                                    value={this.state.item.item_price}
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    color="primary"
                                    style={{
                                        marginTop: '2rem'
                                    }}
                                    className="btn-block"
                                >ยืนยัน</Button>
                            </FormGroup>

                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isActionComplete: state.item.isActionComplete,
    error: state.error
})

export default connect(mapStateToProps, { updateItem, clearError, setIsActionComplete })(UpdateItemModal)
