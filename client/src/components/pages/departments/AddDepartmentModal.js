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

import { setIsActionComplete, addDepartment } from '../../../actions/departmentAction'
import { clearError } from '../../../actions/errorAction'

class AddDepartmentModal extends Component {

    state = {
        modal: false,
        department: {
            name: "",
            code: "",
            chief_name: "",
            chief_position: ""
        },
        err_message: null
    }

    static propTypes = {
        //addCategory: PropTypes.func.isRequired,
        addDepartment: PropTypes.func.isRequired,
        setIsActionComplete: PropTypes.func.isRequired,
        //categories: PropTypes.array.isRequired,
        clearError: PropTypes.func.isRequired,
        isActionComplete: PropTypes.bool.isRequired,
        error: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isActionComplete } = this.props

        if(error !== prevProps.error) {
            if(error.id === 'ADD_DEPARTMENT'){
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
            department:{
                ...this.state.department,
                name: "",
                code: "",
                chief_name: "",
                chief_position: ""
            }
        })
    }

    onChange = e => {
        this.setState({
            department:{
                ...this.state.department,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmit = e => {
        e.preventDefault()
        
        const { department } = this.state
        // call add department action 
        this.props.addDepartment(department)
    }

    render() {
        return (
            <>

                <Button color="primary" className="mb-3 mt-2" onClick={this.toggle}>
                    เพิ่มหน่วยงาน
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>เพิ่มหน่วยงานเบิกสินทรัพย์</ModalHeader>
                    <ModalBody>

                        { this.state.err_message ? 
                            <Alert color="danger">{ this.state.err_message }</Alert> 
                            : 
                            null 
                        }

                        <Form onSubmit={ this.onSubmit }>

                            <FormGroup>
                                <Label for="name">ชื่อหน่วยงาน <span style={{color: "red"}}>*</span></Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="ชื่อหน่วยงาน"
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="code">รหัสหน่วยงาน</Label>
                                <Input
                                    type="text"
                                    name="code"
                                    id="code"
                                    placeholder="รหัสหน่วยงาน"
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="chief_name">หัวหน้าหน่วยงาน <span style={{color: "red"}}>*</span></Label>
                                <Input
                                    type="text"
                                    name="chief_name"
                                    id="chief_name"
                                    placeholder="หัวหน้าหน่วยงาน"
                                    onChange={ this.onChange }
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="chief_position">ตำแหน่งหัวหน้าหน่วยงาน <span style={{color: "red"}}>*</span></Label>
                                <Input
                                    type="text"
                                    name="chief_position"
                                    id="chief_position"
                                    placeholder="ตำแหน่งหัวหน้าหน่วยงาน"
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
    departments: state.department.departments,
    isActionComplete: state.department.isActionComplete,
    error: state.error
})

export default connect(mapStateToProps, {clearError, setIsActionComplete, addDepartment })(AddDepartmentModal)
