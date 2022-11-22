import React from "react";
import { Link, navigate } from "gatsby";
import Layout from "./layout";
import { useState } from "react";


const NavBar = ({click, isFrontActive, mobileNavSwitch}) => {
    var accentColorFront = "#B3EACB"
    var accentColorAbout = "#E1DBDA"

    if (isFrontActive) {
        accentColorFront = "#B3EACB"
        accentColorAbout = "#E1DBDA"
    } else if (!isFrontActive) {
        accentColorFront = "#E1DBDA"
        accentColorAbout = "#B3EACB"
    }

    return (
        <Layout>
            <div className="landingPageNavBar">
                <div className="navLeft">
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="welcomeContainer">
                        <p>Hyggelig å treffe deg! :)</p>
                    </div>
                    </Link>
                    
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
                    <div className="availabilityStatus">
                    <p>Ledig</p>
                    <div className="availabilityIcon"></div>
                    </div>
                    <div className="contactButton">
                    <p>Kontakt</p>
                    </div>
                </div>
                <div className="mobileMenu" onClick={mobileNavSwitch}></div>
            </div>
            
        </Layout>
    )
}

export default NavBar;
