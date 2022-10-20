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
