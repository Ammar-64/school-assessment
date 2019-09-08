import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import JCICLogo from '../../img/JCICLogo.png'
import NiroboLogo from '../../img/NiRoboLogo.png'

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="rgba-blue-slight" dark>

        <MDBNavbarBrand className="align-content-start">
          <a href='https://www.jcictech.com'><img src={JCICLogo} alt="JCIC Logo" target='blank' /></a>
          <a href='https://www.jcictech.com' className="p-5"><img src={NiroboLogo} alt="Nirobo Logo" target='blank' width="50%" height="50%"/></a>
        </MDBNavbarBrand>  

              <MDBDropdown>         
                <MDBDropdownToggle color="blue lighten-4 align-contnet-center" caret>
                  <span>Language / Dil</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>             
                  <MDBDropdownItem><MDBNavLink to="/school-assessment" exact>EN</MDBNavLink></MDBDropdownItem>
                  <MDBDropdownItem><MDBNavLink to="/school-assessment/tr" exact>TR</MDBNavLink></MDBDropdownItem>           
                </MDBDropdownMenu>
              </MDBDropdown>
   
     
                          
 
         
      </MDBNavbar>

    );
  }
}
export default Navbar;