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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faListOl, faThLarge, faCogs, faDollyFlatbed } from '@fortawesome/free-solid-svg-icons'

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
        const homeIcon = <FontAwesomeIcon icon={faTachometerAlt} size="2x" color="green"/>
        const categoryIcon = <FontAwesomeIcon icon={faListOl} size="2x" color="orange"/>
        const itemIcon = <FontAwesomeIcon icon={faThLarge} size="2x" color="yellow"/>
        const settingIcon = <FontAwesomeIcon icon={faCogs} size="2x" color="people"/>
        const setIconCenter = {textAlign: "center"}
        return (
            <div>
                <Nav className="ml-auto" navbar>
                    <NavItem style={setIconCenter}>
                        <NavLink href="/" active={this.state.currentUrl === "/"}>
                            {homeIcon} <br/>แผงควบคุม
                        </NavLink>
                    </NavItem>
                    <NavItem style={setIconCenter}>
                        <NavLink href="/categories" active={this.state.currentUrl === "/categories"}>
                            {categoryIcon} <br/>ประเภทวัสดุ
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/items" active={this.state.currentUrl === "/items"}>
                            {itemIcon} <br/>วัสดุ
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={setIconCenter}>
                            {settingIcon} <br/>Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Option 1</DropdownItem>
                            <DropdownItem>Option 2</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Reset</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </div>
        );
    }
}
