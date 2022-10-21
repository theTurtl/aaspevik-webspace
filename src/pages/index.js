import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Hjem" />
    <div className="landingPageHeroView">
      <div className="landingPageNavBar">
        <div className="navLeft">
          <div className="welcomeContainer">
            <p>Hyggelig å treffe deg! :)</p>
          </div>
          <div className="availabilityStatus">
            <p>Ledig</p>
            <div className="availabilityIcon"></div>
          </div>
        </div>
        <div className="navMiddle">
          <div className="knowledgeButton">
            <p>Min kunnskap</p>
            <div className="accentLine"></div>
          </div>
          <div className="aboutButton">
            <p>Om meg</p>
            <div className="accentLine"></div>
          </div>
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
      </div>

      <div className="frontContent">
        <div className="introductionView">
          <div className="helloContainer">
            <p>Hei, mitt navn er</p>
            <h1>Adrian Aspevik</h1>
          </div>
          <div className="introductionDescription">
            <p>Jeg er 26 år, og er en   <span>grafisk designer</span>   og   <span>frontend utvikler</span>   basert i Bergen.</p>
          </div>
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
        <div className="frontPortrait">
          <div className="frontPicture"></div>
          <div className="moreAbout">
            <div className="moreAboutText"></div>
          </div>
        </div>
      </div>

      <div className="nextButton"></div>
    </div>

    <div className="myKnowledgeSection">
      <div className="myKnowledgeContainer">
        <h3>Min <span>kunnskap</span></h3>
        <div className="knowledgeBoxes">
          <div className="leftBoxes">
            <div className="visuallCommunication">
              <h6>Visuell kommunikasjon</h6>
              <p>Grafisk design</p>
              <p>Brandutvikling</p>
              <p>Visuell identitet</p>
            </div>
            <div className="productDevelopment">
              <h6>Produktutvikling</h6>
              <p>Designsprint</p>
              <p>SCRUB</p>
              <p>Innovasjon og prototyping</p>
              <p>Brukertesting</p>
            </div>
          </div>
          <div className="middleBoxes">
            <div className="frontendDevelopment">
              <h6>Frontend utvikling</h6>
              <p>Apputvikling (iOS + Android)</p>
              <p>Webutvikling</p>
              <p>UX ogUIX design</p>
              <p>Responsivt og dynamisk design</p>
              <p>Søkemotor optimalisert (SEO)</p>
            </div>
            <div className="myBioHook">
              <h6>Jeg digger å<br/>bygge ting!</h6>
              <div className="myBioButton">
                <p>Min bio</p>
              </div>
            </div>
          </div>
          <div className="rightBox">
            <h6>Teknologier</h6>
            <div className="technologyGrid">
              <div className="placeholderTech"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Hjem" />

export default IndexPage
