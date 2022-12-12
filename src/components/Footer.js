import React from "react";

const Footer = () => {

    return (
        <div className="footerSection scrollSnap">
          <div className="footerContainer">
            <div className="footerLeft">
              <h6>© 2022, bygget<br/>og designet av</h6>
              <p>Adrian<br/>Aspevik</p>
              <a href="https://github.com/theTurtl/aaspevik-webspace" target={"_blank"} style={{textDecoration: 'none'}}>
                <div className="sourceCodeButton">
                  <p>Kildekode</p>
                  <div className="gitHubIcon"></div>
                </div>
              </a>
            </div>
            <div className="footerMiddle">
              <a href="mailto:adrian@aspevik.com" style={{textDecoration: 'none'}}>
                <div className="footerEmail">
                  <p>adrian@aspevik.com</p>
                  <div className="footerLine"></div>
                </div>
              </a>
              <a href="tel:+4799250743" style={{textDecoration: 'none'}}>
                <div className="footerNumber">
                  <p>+47 992 50 743</p>
                  <div className="footerLine"></div>
                </div>
              </a>
            </div>
            <div className="footerRight">
              <p>Linker</p>
              <div className="linksFlex">
                <a href="https://www.linkedin.com/in/adrian-aspevik-037aa117a" target={"_blank"}>
                  <div className="footerLinkedin"></div>
                </a>
                <a href="https://github.com/theTurtl/aaspevik-webspace" target={"_blank"}>
                  <div className="footerGit"></div>
                </a>
              </div>
              
            </div>
          </div>
        </div>
    )
}

export default Footer;