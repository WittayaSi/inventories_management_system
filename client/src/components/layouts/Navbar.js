import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from "reactstrap";

export default class NavBar extends Component {
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
        return (
            <div>
                <Navbar color="dark" dark expand="md" fixed="top">
                    <Container>
                        <NavbarBrand href="/">IMS</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/" active={this.state.currentUrl === "/"}>หน้าหลัก</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/categories" active={this.state.currentUrl === "/categories"}>ประเภทวัสดุ</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/items" active={this.state.currentUrl === "/items"}>วัสดุ</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>Option 1</DropdownItem>
                                        <DropdownItem>Option 2</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>Reset</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
