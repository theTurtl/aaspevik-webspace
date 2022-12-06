import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavBar from "../components/NavBar"

const AboutMe = () => {

  const [pageActive, setPageActive] = React.useState("inherit");

  const hidePage = () => {
    if (pageActive === "inherit") {
      setPageActive("none")
    } else {
      setPageActive("inherit")
    }
  }


  return (
  <Layout>
    <Seo title="Om meg" />
    <NavBar isFrontActive={false} pageHider={hidePage} />
    <motion.div className="aboutMePage" style={{display: pageActive}}
    initial={{y: 100, opacity: 0}}
    animate={{y: 0, opacity: 1, duration: 1}}
    >
        
      
      <div className="aboutMeBanner">
        <div className="aboutMeBannerLeft">
          <h5>Heisann :)</h5>
          <h6>Her står det litt om hvem jeg er, og<br/>
          hvordan jeg endte opp med frontend og<br/>mobilutvikling.</h6>
          <div className="introductionButtons">
            <div className="downloadCV">
              <p>Last ned CV</p>
            </div>
            <div className="portfolio">
              <div className="arrivingSoon">
                <p>Kommer</p>
              </div>
              <p className="portfolioText">Portfolie</p>
            </div>
          </div>
        </div>
        <div className="aboutMeBannerRight">
          <div className="roundPortrait"></div>
        </div>
      </div>

      <div className="whoAmISection">
        <h4>Hvem er jeg?</h4>
        <div className="whoAmIDivider">
          <div className="whoAmILeft">
            <div className="partOne">
              <h6>En introduksjon</h6>
              <p>Jeg er en grafisk designer og frontend utvikler som er veldig interessert i 

              </p>
            </div>
            <div className="partTwo">
              <h6>Part 1</h6>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>
            <div className="partThree">
              <h6>Part 1</h6>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
            </div>
          </div>
          <div className="whoAmIRight">
            <div className="quoteSection">
              <div className="quoteHeader">
                <div className="headerIllustration"></div>
                <div>
                  <p>Nicole a. Dkoea</p>
                  <p className="quoteFrom">Mamma</p>
                </div>
              </div>
              <p>"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                sed diam nonummy nibh euismod tincidunt ut laoreet."</p>
            </div>
            <div className="statusSection">
              <div className="statusHeader">
                <p>Status</p>
                <div className="statusIcon"></div>
              </div>
              <div className="statusContainer">
                <p>Student på 3. året i frontend og mobilutvikling bachelor.</p>
              </div>
            </div>
            {/*<div className="myInterestSection">
              <p>Mine interesser</p>
              <div className="pointsField">
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </motion.div>
    <div className="footerSection">
      <div className="footerContainer">
        <div className="footerLeft">
          <h6>© 2022, bygget<br/>og designet av</h6>
          <p>Adrian<br/>Aspevik</p>
          <div className="sourceCodeButton">
            <p>Kildekode</p>
            <div className="gitHubIcon"></div>
          </div>
        </div>
        <div className="footerMiddle">
          <a href="mailto:adrian@aspevik.com" style={{textDecoration: 'none'}}>
            <div className="footerEmail">
              <p>adrian@aspevik.com</p>
              <div className="footerLine"></div>
            </div>
          </a>
          <a href="tel:+4799250743" style={{textDecoration: 'none'}}>
            <div className="footerNumber" >
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
  </Layout>
  )
}

export const Head = () => <Seo title="Om meg" />

export default AboutMe
