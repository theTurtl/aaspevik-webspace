import React from "react";
import { Link, navigate } from "gatsby";
import Layout from "./layout";
import { useState } from "react";


const NavBar = ({click, isFrontActive, pageHider}) => {
    var accentColorFront = "#B3EACB"
    var accentColorAbout = "#E1DBDA"
    const [mobileNavActive, setMobileNavActive] = React.useState("none");
    const [pageActive, setPageActive] = React.useState("");

    if (isFrontActive) {
        accentColorFront = "#B3EACB"
        accentColorAbout = "#E1DBDA"
    } else if (!isFrontActive) {
        accentColorFront = "#E1DBDA"
        accentColorAbout = "#B3EACB"
    }


    const mobileNavSwitch = () => {
        if (mobileNavActive === "none") {
          setMobileNavActive("");
          pageHider()
        } else {
          setMobileNavActive("none");
          pageHider()
        }
      }

      const routeToAbout = () => {
        navigate("/AboutMe");
        pageHider();
      }

      const routeToFrontpage = () => {
        navigate("/")
        pageHider();
      }

    return (
        <Layout>
          <div className="mobileNav" style={{display: mobileNavActive}}>
            <div className="topMobileNav">
              <div className="exitMobileNav" onClick={mobileNavSwitch}></div>
              <div className="mobileStatusBar">
                  <p>Ledig</p>
                  <div className="okIcon"></div>
              </div>
            </div>
            <div className="mobileNavLinks">
              
              <p onClick={routeToAbout}>Om meg</p>
              
              <p onClick={routeToFrontpage}>Forside</p>
              <a href="mailto:adrian@aspevik.com" style={{color: 'inherit', textDecoration: 'none'}}>
                <p>Kontakt</p>
              </a>
            </div>
            <div className="mobileSocials">
              <div className="linkIcons">
                <a href="https://www.linkedin.com/in/adrian-aspevik-037aa117a" target={"_blank"}>
                  <div className="mobileLinkd"></div>
                </a>
                <a href="https://github.com/theTurtl/aaspevik-webspace" target={"_blank"}>
                  <div className="mobileGit"></div>
                </a>
              </div>
              <a href="mailto:adrian@aspevik.com" style={{color: 'inherit', textDecoration: 'none'}}>
                <div className="contactMobile">
                  <p>adrian@aspevik.com</p>
                  <div className="mobileAccentLine"></div>
                </div>
              </a>
              <a href="tel:+4799250743" style={{color: 'inherit', textDecoration: 'none'}}>
                <div className="contactMobile">
                  <p>+47 992 50 743</p>
                  <div className="mobileAccentLine"></div>
                </div>
              </a>
            </div>
          </div>
            <div className="landingPageNavBar">
                <div className="navLeft">
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="welcomeContainer">
                    <div className="logo">
                            <p>A.A</p>
                        </div>
                        <p>Hyggelig å treffe deg! :)</p>
                    </div>
                    </Link>
                    <div className="availabilityStatus">
                    <p>Ledig</p>
                    <div className="availabilityIcon"></div>
                    </div>
                </div>
                <div className="navMiddle">
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="knowledgeButton" onClick={click}>
                        <p>Forside</p>
                        <div className="accentLineKnowledge" style={{backgroundColor: accentColorFront}}></div>
                    </div>
                    </Link>

                    <Link to="/AboutMe" style={{textDecoration: 'none'}}>
                    <div className="aboutButton">
                        <p>Om meg</p>
                        <div className="accentLineAbout" style={{backgroundColor: accentColorAbout}}></div>
                    </div>
                    </Link>
                </div>
                <div className="navRight">
                    {/*<div className="languageMenu">
                    <p>NO</p>
                    <div className="arrowDown"></div>
                    </div>*/}
                    
                    <a href="mailto:adrian@aspevik.com" style={{textDecoration: 'none'}}>
                        <div className="contactButton">
                        <p>Kontakt</p>
                        <div className="contactAnimation"></div>
                        <div className="contactAnimation2"></div>
                        </div>
                    </a>
                </div>
                <div className="mobileMenu" onClick={mobileNavSwitch}></div>
            </div>
            
        </Layout>
    )
}

export default NavBar;
