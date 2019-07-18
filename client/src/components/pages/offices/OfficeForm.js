import React, { Component } from 'react'
import { 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button, 
    Row, 
    Col,
    Alert
} from 'reactstrap'
import { connect } from 'react-redux'

import { updateOffice, setUpdated, setButtonDisabled } from '../../../actions/officeAction'

class OfficeForm extends Component {

    initState = {
        office: {
            full_name: '',
            short_name: '',
            address: '',
            tel_no: '',
            fax_no: '',
            chief_name: '',
            chief_position: '',
            invent_chief_name: '',
            invent_chief_position: ''
        },
        err_message: null
    }

    state = this.initState

    componentDidUpdate(prevProps) {
        const {error, office} = this.props 
        if(error !== prevProps.error) {
            if(error.id === 'UPDATE_OFFICE'){
                this.setState({
                    err_message: error.message.message
                })
            }else{
                this.setState({
                    err_message: null
                })
            }
        }

        if( office !== prevProps.office ) {
            this.setState({
                office: {...office[0]}
            })
        }
    }

    onChange = e => {
        this.setState({
            office:  {
                ...this.state.office,
                [e.target.name]: e.target.value
            }
        })
        this.props.setButtonDisabled()
    }

    resetForm = () => {
        this.setState(this.initState)
    }

    onSubmit = e => {
        e.preventDefault();
        e.target.reset();

        const { office } = this.state

        this.props.updateOffice(office)
    }

    render() {
        const {
            full_name, 
            short_name, 
            address,
            tel_no,
            fax_no,
            chief_name,
            chief_position,
            invent_chief_name,
            invent_chief_position
        } = this.state.office
        return (
            <Row className="justify-content-md-center">
                <Col md={8}>
                    { this.state.err_message ? 
                        <Alert color="danger">{ this.state.err_message }</Alert> 
                        : 
                        null 
                    }

                    { this.props.updated ? 
                        <Alert color="success"><b>แก้ไขข้อมูลเรียบร้อยแล้ว</b></Alert> 
                        : 
                        null 
                    }   

                    <Form onSubmit={this.onSubmit}>

                        <FormGroup>
                            <Label for="full_name">ชื่อหน่วยงาน <span style={{ color: 'red' }}>*</span></Label>
                            <Input
                                type="text"
                                name="full_name"
                                id="full_name"
                                placeholder="ชื่อหน่วยงาน"
                                value={full_name}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="short_name">ชื่อย่อหน่วยงาน <span style={{ color: 'red' }}>*</span></Label>
                            <Input
                                type="text"
                                name="short_name"
                                id="short_name"
                                placeholder="ชื่อย่อหน่วยงาน"
                                value={short_name}
                                onChange={this.onChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">ที่อยู่ <span style={{ color: 'red' }}>*</span></Label>
                            <Input
                                type="textarea"
                                name="address"
                                id="address"
                                placeholder="กรอกที่อยู่"
                                value={address}
                                onChange={this.onChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="tel_no">หมายเลขโทรศัพท์ </Label>
                                    <Input
                                        type="text"
                                        name="tel_no"
                                        id="tel_no"
                                        placeholder="หมายเลขโทรศัพท์"
                                        value={tel_no}
                                        onChange={this.onChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="fax_no">หมายเลขโทรสาร </Label>
                                    <Input
                                        type="text"
                                        name="fax_no"
                                        id="fax_no"
                                        placeholder="หมายเลขโทรสาร"
                                        value={fax_no}
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="chief_name">ชื่อหัวหน้าหน่วยงาน </Label>
                                    <Input
                                        type="text"
                                        name="chief_name"
                                        id="chief_name"
                                        placeholder="ชื่อหัวหน้าหน่วยงาน"
                                        value={chief_name}
                                        onChange={this.onChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="chief_position">ตำแหน่งหัวหน้าหน่วยงาน </Label>
                                    <Input
                                        type="text"
                                        name="chief_position"
                                        id="chief_position"
                                        placeholder="ตำแหน่งหัวหน้าหน่วยงาน"
                                        value={chief_position}
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label for="invent_chief_name">ชื่อหัวหน้างานพัสดุ </Label>
                                    <Input
                                        type="text"
                                        name="invent_chief_name"
                                        id="invent_chief_name"
                                        placeholder="ชื่อหัวหน้างานพัสดุ"
                                        value={invent_chief_name}
                                        onChange={this.onChange}
                                    />
                                </Col>
                                <Col>
                                    <Label for="invent_chief_position">ตำแหน่งหัวหน้างานพัสดุ </Label>
                                    <Input
                                        type="text"
                                        name="invent_chief_position"
                                        id="invent_chief_position"
                                        placeholder="ตำแหน่งหัวหน้างานพัสดุ"
                                        value={invent_chief_position}
                                        onChange={this.onChange}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        
                        <FormGroup>
                            <Row>
                                <Col style={{textAlign: "center"}}>
                                    <Button
                                        color="success"
                                        style={{
                                            marginTop: '2rem'
                                        }}
                                        type="submit"
                                        disabled={this.props.button_disabled}
                                    >บันทึก</Button>
                                    {' '}
                                    <Button
                                        color="danger"
                                        style={{
                                            marginTop: '2rem'
                                        }}
                                        type="reset"
                                        onClick={this.resetForm}
                                    >ยกเลิก</Button>
                                </Col>
                            </Row>
                            
                        </FormGroup>

                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    office: state.office.office,
    error: state.error,
    updated: state.office.updated,
    button_disabled: state.office.button_disabled
})

export default connect(mapStateToProps, { updateOffice, setUpdated, setButtonDisabled })(OfficeForm)

