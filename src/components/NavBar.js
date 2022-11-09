import React from "react";
import { Link } from "gatsby";
import Layout from "./layout";


const NavBar = ({click, isMobile}) => {


    return (
        <Layout>
            <div className="landingPageNavBar">
                <div className="navLeft">
                    <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="welcomeContainer">
                        <p>Hyggelig å treffe deg! :)</p>
                    </div>
                    </Link>
                    <div className="availabilityStatus">
                    <p>Ledig</p>
                    <div className="availabilityIcon"></div>
                    </div>
                </div>
                <div className="navMiddle">
                    <div className="knowledgeButton" onClick={click}>
                    <p>Min kunnskap</p>
                    <div className="accentLineKnowledge"></div>
                    </div>
                    <Link to="/AboutMe" style={{textDecoration: 'none'}}>
                    <div className="aboutButton">
                        <p>Om meg</p>
                        <div className="accentLineAbout"></div>
                    </div>
                    </Link>
                </div>
                <div className="navRight">
                    <div className="languageMenu">
                    <p>NO</p>
                    <div className="arrowDown"></div>
                    </div>
                    <div className="contactButton">
                    <p>Kontakt</p>
                    </div>
                </div>
                <div className="mobileMenu"></div>
            </div>
        </Layout>
    )
}

export default NavBar;
