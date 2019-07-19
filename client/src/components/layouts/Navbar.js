import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faTachometerAlt, 
    faListOl, 
    faThLarge, 
    faCogs, 
    faUniversity, 
    faPuzzlePiece,
    faArchive,
    faUsers,
    faDollyFlatbed
} from '@fortawesome/free-solid-svg-icons'

export default class Example extends React.Component {
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
        const homeIcon = <FontAwesomeIcon icon={faTachometerAlt} size="2x" color="green" />
        const settingIcon = <FontAwesomeIcon icon={faCogs} size="2x" color="#0FEAD6" />
        const ordersIcon = <FontAwesomeIcon icon={faDollyFlatbed} size="2x" color="orange"/>
        const categoryIcon = <FontAwesomeIcon icon={faListOl}/>
        const itemIcon = <FontAwesomeIcon icon={faThLarge}/>

        const setIconCenter = { textAlign: "center", paddingRight: "1rem", paddingLeft: "1rem" }
        return (
            <div>
                <Navbar color="secondary" dark expand="md" style={{ marginTop: "3.5rem", minHeight: "12rem" }}>
                    <Container>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto mr-auto" navbar>
                                <NavItem style={setIconCenter}>
                                    <NavLink href="/" active={this.state.currentUrl === "/"}>
                                        {homeIcon} <br />แผงควบคุม
                                    </NavLink>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret style={setIconCenter}>
                                        {settingIcon} <br />ตั้งค่าระบบ
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem href="/settings/office">
                                            <FontAwesomeIcon icon={faUniversity} /> ข้อมูลพื้นฐานของหน่วยงาน
                                        </DropdownItem>
                                        <DropdownItem href="/settings/department">
                                            <FontAwesomeIcon icon={faPuzzlePiece} /> หน่วยงานเบิกสินทรัพย์
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/settings/categories">
                                            {categoryIcon} ประเภทวัสดุ
                                        </DropdownItem>
                                        <DropdownItem href="/settings/items">
                                            {itemIcon} ชนิดวัสดุ
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/settings/depreciations">
                                            <FontAwesomeIcon icon={faArchive} /> อายุการใช้งานและอัตราค่าเสื่อม
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem href="/settings/personals">
                                            <FontAwesomeIcon icon={faUsers} /> ข้อมูลบุคลากร
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <NavItem style={setIconCenter}>
                                    <NavLink href="/orders" active={this.state.currentUrl === "/orders"}>
                                        {ordersIcon} <br />รายการเบิก-จ่าย
                                    </NavLink>
                                </NavItem>

                                {/* <NavItem style={setIconCenter}>
                                    <NavLink href="/items" active={this.state.currentUrl === "/items"}>
                                        {itemIcon} <br />ชนิดวัสดุ
                                    </NavLink>
                                </NavItem> */}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}