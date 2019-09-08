import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="rgba-blue-slight" className="font-small pt-4 mt-4">
      <div className="footer text-center py-3 dark-grey-text">
        <MDBContainer>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.jcictech.com" className="dark-grey-text"> jcictech.com </a>
          </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;