import { navigationBar } from '@constants/index';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Container } from 'react-bootstrap';
import NavigationConst from '@baseNavigator/NavigationConst';
import { useNavigate } from 'react-router-dom';
function NavBarComp() {
  const [show, setShow] = useState(false);
  const navi = useNavigate()

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  const onClickNavigate = async (nav) => {
    console.log("nav ===============",nav);
    
    navi(nav)
  }


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
          style={{ width: "calc(100% - 200px)", justifyContent: "flex-end" }}
        >
          <Nav>
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
                              <NavDropdown.Item eventKey={subItem.id} onClick={() => onClickNavigate(subItem?.nav)}>
                                {subItem.name}
                              </NavDropdown.Item>
                            )
                          })
                        }
                      </NavDropdown>
                      :
                      <Nav.Item key={item.id}>
                        <Nav.Link onClick={() => onClickNavigate(item?.nav)}>
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