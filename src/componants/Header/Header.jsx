import { navigationBar } from '@constants/index';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Container } from 'react-bootstrap';
import NavigationConst from '@baseNavigator/NavigationConst';
function NavBarComp() {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
      <Navbar
        expand="lg"
        className="navigation-comp-main-wrapper sticky-top"
      >
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <Navbar.Brand href={NavigationConst?.home}>
            <div className="header-logo-text">
              Nirali
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ width: "calc(100% - 200px)" , justifyContent: "flex-end" }}
          >
            <Nav  onSelect={handleSelect}>
              {
                navigationBar.map((item) => {
                  return (
                    <>
                      {item?.servicesType ?
                        <NavDropdown
                          title={item.mainMenu}
                          id="nav-dropdown"
                          // show={show}
                          // onMouseEnter={handleMouseEnter}
                          // onMouseLeave={handleMouseLeave}
                        >
                          {
                            item.servicesType.map((subItem) => {
                              return (
                                <NavDropdown.Item eventKey={subItem.id}>
                                  {subItem.name}
                                </NavDropdown.Item>
                              )
                            })
                          }
                        </NavDropdown>
                        :
                        <Nav.Item key={item.id}>
                          <Nav.Link eventKey={item.id}>
                            {item.mainMenu}
                          </Nav.Link>
                        </Nav.Item>
                      }
                    </>
                  )
                }
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBarComp;