import React from "react";
import { Link } from "react-router-dom";
import {Button,Collapse,DropdownToggle, DropdownMenu,DropdownItem, UncontrolledDropdown,NavbarBrand,Navbar,NavItem,NavLink,Nav,Row,Col,} from "reactstrap";

export default function IndexNavbar() {

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };

  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };

  const onCollapseExited = () => {
    setCollapseOut("");
  };

  const scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
        <div className="navbar-translate">
          <NavbarBrand href="https://unitaslink.com" id="navbar-brand">
            <span className="h2" style={{color:"#fff"}}>UnitasLink</span>     
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <NavLink href="https://unitaslink.com/" onClick={(e) => e.preventDefault()}>
                  UnitasLink
                </NavLink>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/mobilefirstinc"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/mobilefirst/"
                rel="noopener noreferrer"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fab fa-facebook-square" />
                <p className="d-lg-none d-xl-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/company/mobilefirst-applications/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on LinkedIn"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">LinkedIn</p>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                See Demo
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem href="https://demo-validate.unitaslink.com/">
                  <i className="tim-icons icon-paper" />
                  Verify NFT 
                </DropdownItem>
                <DropdownItem href="http://demo-mint.unitaslink.com/">
                  <i className="tim-icons icon-bullet-list-67" />
                  Mint NFT with Crypto
                </DropdownItem>
                <DropdownItem href="http://demo-mint-fiat.unitaslink.com/">
                  <i className="tim-icons icon-image-02" />
                  Mint NFT with Fiat
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Button
                className="nav-link d-none d-lg-block"
                color="success"
                target="_blank"
                href="https://unitaslink.com/contact/"
              >
                <i className="tim-icons icon-single-02" />Connect Us
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  );
}