import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Navbar, Nav, NavDropdown, Image, Dropdown } from 'react-bootstrap';
import { BoxArrowRight, CloudDownload, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { ROLE } from '../../api/role/Role';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const menuStyle = { marginBottom: '10px' };
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#FFFFFF', menuStyle }}>
      <Container>
        <Navbar.Brand
          id={COMPONENT_IDS.NAVBAR_LANDING_PAGE}
          as={NavLink}
          to="/"
        >
          <Image className="navbar-logo" alt="spire logo" src="/images/inspire.gif" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={COMPONENT_IDS.NAVBAR_COLLAPSE} />
        <Navbar.Collapse id={COMPONENT_IDS.NAVBAR_COLLAPSE}>
          <Nav className="mx-auto justify-content-center">
            {currentUser ? ([
              <Nav.Link id={COMPONENT_IDS.NAVBAR_DASHBOARD_PAGE} as={NavLink} to="/dashboard" key="add">Dashboard</Nav.Link>,
              <Dropdown key="dropdown" className="custom-hover-dropdown">
                <Dropdown.Toggle id={COMPONENT_IDS.NAVBAR_DATA_INPUT} as={NavLink} className="nav-link">
                  Input Data
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item id={COMPONENT_IDS.NAVBAR_AUDITED_BALANCE_INPUT_PAGE} as={NavLink} to="/auditedbalanceinput">Audited Balance</Dropdown.Item>
                  <Dropdown.Item id={COMPONENT_IDS.NAVBAR_BUDGET_PL_INPUT_PAGE} as={NavLink} to="/budgetplinput">Budget P&L</Dropdown.Item>
                  <Dropdown.Item id={COMPONENT_IDS.NAVBAR_AUDITED_INPUT_PAGE} as={NavLink} to="/audited">Audited</Dropdown.Item>
                  <Dropdown.Item id={COMPONENT_IDS.NAVBAR_AUDITED_INPUT_PAGE} as={NavLink} to="/financial-projection">4100</Dropdown.Item>
                  <Dropdown.Item id={COMPONENT_IDS.NAVBAR_AUDITED_INPUT_PAGE} as={NavLink} to="/2005">2005_2</Dropdown.Item>
                  <Dropdown.Item id={COMPONENT_IDS.NAVBAR_AUDITED_INPUT_PAGE} as={NavLink} to="/2503">2503</Dropdown.Item>
                  <Dropdown.Item id={COMPONENT_IDS.NAVBAR_CSV_INPUT_PAGE} as={NavLink} to="/csv">CSV File</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>,
              <Nav.Link as={NavLink} to="/contact" key="contact">Contact Us</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]) ? (
              [<Nav.Link id={COMPONENT_IDS.NAVBAR_LIST_STUFF_ADMIN} as={NavLink} to="/admin" key="admin">Admin</Nav.Link>,
                <NavDropdown id={COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN} title="Manage" key="manage-dropdown">
                  <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_MANAGE_DROPDOWN_DATABASE} key="manage-database" as={NavLink} to="/manage-database"><CloudDownload /> Database</NavDropdown.Item>
                </NavDropdown>]
            ) : ''}
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? ([
              <Nav.Link as={NavLink} to="/about" key="about">About Us</Nav.Link>,
              <Nav.Link as={NavLink} to="/contact" key="contact">Contact Us</Nav.Link>,
              <Nav.Link href="https://www.spirenewyork.com/" key="spire-ny" target="_blank">Spire NY</Nav.Link>,
              <Nav.Link href="https://www.spirehawaii.com/" key="spire-hi" target="_blank">Spire HI</Nav.Link>,
              <NavDropdown id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN} title="Login" className="custom-hover-dropdown">
                <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_IN} as={NavLink} to={{ pathname: '/signin-signup', search: '?form=signin' }} activeClassName=""><PersonFill />Sign in</NavDropdown.Item>
                <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_UP} as={NavLink} to={{ pathname: '/signin-signup', search: '?form=signup' }} activeClassName=""><PersonPlusFill />Sign up</NavDropdown.Item>
              </NavDropdown>,
            ]) : (
              <NavDropdown id={COMPONENT_IDS.NAVBAR_CURRENT_USER} title={currentUser} className="custom-hover-dropdown">
                <NavDropdown.Item as={NavLink} to="/userpage"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User Page</NavDropdown.Item>
                <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_SIGN_OUT} as={NavLink} to="/signout"><BoxArrowRight /> Sign out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
