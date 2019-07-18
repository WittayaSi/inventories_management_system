import React, { Component } from "react";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Container
} from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollyFlatbed } from '@fortawesome/free-solid-svg-icons'

export default class NavBarHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            currentUrl: window.location.pathname
        };
        
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const logo = <FontAwesomeIcon icon={faDollyFlatbed} size="lg" color="green"/>
        // const userIcon = <FontAwesomeIcon icon={faUser} color="people"/>
        const setIconCenter = {textAlign: "center"}
        return (
            <div>
                <Navbar color="dark" dark expand="md" fixed="top">
                    <Container>
                        <NavbarBrand href="#" style={setIconCenter}>
                            {logo} ระบบจัดการวัสดุและครุภัณฑ์สำนักงาน ( OIMS )
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        {/* <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret style={setIconCenter}>
                                        {userIcon} UserName 
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Profile</DropdownItem>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Logout</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse> */}
                    </Container>
                </Navbar>
            </div>
        );
    }
}
