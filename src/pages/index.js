import * as React from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import NavBar from "../components/NavBar"
import { Helmet } from "react-helmet"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import Footer from "../components/Footer"


const IndexPage = () => { 

  const ref = React.useRef(null);
  const top = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const [pageActive, setPageActive] = React.useState("inherit");
  const [loading, setLoading] = React.useState(true);



  const nextPageClick = () => {
    setIsVisible(false);
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  const hidePage = () => {
    if (pageActive === "inherit") {
      setPageActive("none")
    } else {
      setPageActive("inherit")
    }
  }

  const routeToAbout = () => {
    navigate("AboutMe")
  }







  return (
  <Layout>
    <Helmet>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
  </Helmet>
  <Seo title="Hjem" />
  <AnimateSharedLayout type="crossfade">
    <AnimatePresence>    
    <NavBar isFrontActive={true} pageHider={hidePage}/>
      <div style={{display: pageActive}}>
        <motion.div className="landingPageHeroView scrollSnap" ref={top}
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1, duration: 1}}
        >
          
          
          
          <div className="frontContent">
            <div className="nextButton2" onClick={nextPageClick}></div>
            <div className="introductionView">
              <div className="helloContainer">
                <p>Hei, mitt navn er</p>
                <h1>Adrian Aspevik</h1>
              </div>
              <div className="introductionDescription">
                <p>Jeg er 26 år, og er en   <span>grafisk designer</span><br/>   og   <span>frontend utvikler</span>   basert i Bergen.</p>
              </div>
              <div className="introductionButtons">
                <div className="downloadCV" onClick={routeToAbout}>
                  <p>Om meg</p>
                </div>
                <div className="portfolio">
                  <div className="arrivingSoon">
                    <p>Kommer</p>
                  </div>
                  <p className="portfolioText">Portfolie</p>
                </div>
              </div>
            </div>
            <div className="frontPortrait" >
              <div className="frontPicture"></div>
              
              {/*<Link to="/AboutMe">
                <div className="moreAbout">
                  <div className="moreAboutText"></div>
                </div>
              </Link>*/}
            </div>
          </div>
          <div className="nextButton" onClick={nextPageClick}></div>
        </motion.div>

        <div className="myKnowledgeSection" ref={ref}>
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
                <Link to="/AboutMe" style={{textDecoration: 'none'}}>
                  <div className="myBioHook">
                    <h6>Jeg digger å<br/>bygge ting!</h6>
                    <div className="myBioButton">
                      <p>Min bio</p>
                    </div>
                  </div>
                </Link>
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
        
        <div className="didYouKnowSection scrollSnap">
          <div className="centerDiv">
            <div className="didYouKnowContainer">
              <div className="didYouText">
                <h6>Visste du at...</h6>
                <p><strong style={{fontWeight: 900, marginLeft: 0}}>web-design kan være avgjørende for en bedrifts suksess?</strong> Uansett hvilken type bedrift du driver, 
                kan god web-design være viktig for å øke trafikken og konverteringen til bedriften din.
                </p>
              </div>
              <div className="statBoxesContainer">
                <div className="upperBoxes">
                  <div className="statBox fiftyMs">
                    <p className="statBoxTitle">50ms</p>
                    <p className="statBoxP">for å danne et<br/>førsteinntrykk.</p>
                    <a href="https://cxl.com/blog/first-impressions-matter-the-importance-of-great-visual-design/" target="_blank">
                      <div className="sourceIcon" >
                        <div className="infoIcon"></div>
                      </div>
                    </a>
                  </div>
                  <div className="statBox">
                    <p className="statBoxTitle">75%</p>
                    <p className="statBoxP">baserer troverdigheten av<br/>en merkevare på design.</p>
                    <a href="https://www.kinesisinc.com/the-truth-about-web-design/" target={"_blank"}>
                      <div className="sourceIcon">
                        <div className="infoIcon"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="lowerBoxes">
                <div className="statBox">
                    <p className="statBoxTitle">42%</p>
                    <p className="statBoxP">vil forlate en side<br/>med dårlig funksjonalitet</p>
                    <a href="https://topdesignfirms.com/web-design/blog/website-redesign-checklist" target={"_blank"}>
                      <div className="sourceIcon">
                        <div className="infoIcon"></div>
                      </div>
                    </a>
                  </div>
                  <div className="statBox">
                    <p className="statBoxTitle">50%</p>
                    <p className="statBoxP">av forbrukere mener merke-<br/>varer bør prioritere design.</p>
                    <a href="https://topdesignfirms.com/web-design/blog/website-redesign-checklist" target={"_blank"}>
                      <div className="sourceIcon">
                        <div className="infoIcon"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactHookSection scrollSnap">
          <div className="contactHookContainer">
            <div className="contactLinks">
              <div className="contactIcons">
                <div className="linkedIn"></div>
                <div className="gitHub"></div>
              </div>
              <a href="mailto:adrian@aspevik.com" style={{textDecoration: 'none'}}>
                <div className="contactEmail">
                  <p>adrian@aspevik.com</p>
                  <div className="line"></div>
                </div>
              </a>
              <a href="tel:+4799250743" style={{textDecoration: 'none'}}>
                <div className="contactNumber">
                  <p>+47 992 50 743</p>
                  <div className="line"></div>
                </div>
              </a>
              <a href="mailto:adrian@aspevik.com" style={{textDecoration: 'none'}}>
                <div className="contactSectionButton">
                  <p>Kontakt</p>
                </div>
              </a>
            </div>
            <div className="contactsByeIllustration"></div>
          </div>
          {/*<div className="toTheTop" onClick={topPageClick}>
            <div className="arrowUp"></div>
            <p>Til toppen</p>
          </div>*/}
        </div>
        <Footer/>
      </div>
    </AnimatePresence>
  </AnimateSharedLayout>
  </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Adrian Aspevik">
  <script type="application/ld+json">
  {`
    {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": "Adrian Aspevik",
      "description": "Jeg tilbyr tjenester innen design og programvareutvikling",
      "url": "https://aspevik.com",
      "logo": "https://aspevik.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bergen",
        "addressRegion": "Vestlandet",
        "postalCode": "5146",
        "addressCountry": "NO"
      },
      "openingHoursSpecification":
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+4799250743",
        "email": "adrian@aspevik.com",
        "contactType": "Customer Service"
      }
    }
  `}
</script>
  </Seo>

export default IndexPage
