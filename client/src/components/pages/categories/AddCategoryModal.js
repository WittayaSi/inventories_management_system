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
    Container,
    Alert
} from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { clearError } from '../../../actions/errorAction'
import { addCategory, setIsActionComplete } from '../../../actions/categoryAction'

class AddCategoryModal extends Component {

    state = {
        modal: false,
        category_name: '',
        err_message: null
    }

    static propTypes = {
        addCategory: PropTypes.func.isRequired,
        setIsActionComplete: PropTypes.func.isRequired,
        categories: PropTypes.array.isRequired,
        clearError: PropTypes.func.isRequired,
        isActionComplete: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isActionComplete } = this.props

        if(error !== prevProps.error) {
            if(error.id === 'ADD_CATEGORY'){
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
            category_name: ''
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        console.log()
        
        // call add category action 
        this.props.addCategory(this.state.category_name)
    }

    render() {
        return (
            <>

                <Button color="primary" className="mb-3 mt-2" onClick={this.toggle}>
                    ADD CATEGORY
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>ADD CATEGORY</ModalHeader>
                    <ModalBody>

                        { this.state.err_message ? 
                            <Alert color="danger">{ this.state.err_message }</Alert> 
                            : 
                            null 
                        }

                        <Form onSubmit={ this.onSubmit }>

                            <FormGroup>
                                <Label for="category_name">Category Name</Label>
                                <Input
                                    type="text"
                                    name="category_name"
                                    id="category_name"
                                    placeholder="Category Name"
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
                                >Add</Button>
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

export default connect(mapStateToProps, { addCategory, clearError, setIsActionComplete })(AddCategoryModal)
