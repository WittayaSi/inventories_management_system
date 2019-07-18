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
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { clearError } from '../../../actions/errorAction'
import { updateCategory, setIsActionComplete } from '../../../actions/categoryAction'

class UpdateCategoryModal extends Component {

    state = {
        modal: false,
        category_name: '',
        err_message: null
    }

    static propTypes = {
        updateCategory: PropTypes.func.isRequired,
        setIsActionComplete: PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired,
        clearError: PropTypes.func.isRequired,
        isActionComplete: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.setState({
            category_name: this.props.category_name
        })
    }

    componentDidUpdate(prevProps) {
        const { error, isActionComplete, category_name } = this.props
        
        if(category_name !== prevProps.category_name){
            this.setState({
                category_name
            })
        }
        if(error !== prevProps.error) {
            if(error.id === 'UPDATE_CATEGORY'){
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
            modal: !this.state.modal
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const id = this.props.id
        this.props.updateCategory(id, this.state.category_name)
    }

    render() {
        return (
            <>

                <Button color="primary" onClick={this.toggle}>
                    แก้ไข
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>เเก้ไขประเภทวัสดุ</ModalHeader>
                    <ModalBody>

                        { this.state.err_message ? 
                            <Alert color="danger">{ this.state.err_message }</Alert> 
                            : 
                            null 
                        }

                        <Form onSubmit={ this.onSubmit }>

                            <FormGroup>
                                <Label for="category_name">ชื่อประเภทวัสดุ</Label>
                                <Input
                                    type="text"
                                    name="category_name"
                                    id="category_name"
                                    value={this.state.category_name}
                                    placeholder="ชื่อประเภทวัสดุ"
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
    isActionComplete: state.category.isActionComplete,
    error: state.error
})

export default connect(mapStateToProps, { updateCategory, clearError, setIsActionComplete })(UpdateCategoryModal)
