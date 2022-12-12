import * as React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

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
              <p>Forside</p>
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
              <p>Møt Adrian, en programmerer og grafisk designer som bruker dagene på å skrive 
                på datamaskinen og nettene med å stirre på et tomt lerret, på jakt etter 
                inspirasjon. Med en forkjærlighet for både teknologi og kunst, har han funnet 
                en måte å slå sammen lidenskapene sine ved å skape digitale kreasjoner.<br/><br/>Når 
                han ikke er opptatt med å løse kodeproblemer eller bringe sine kunstneriske 
                visjoner ut i livet, kan du finne ham hengi seg til sin hemmelige kjærlighet 
                for cheesy sitcoms fra 90-tallet.
              </p>
            </div>
            <div className="partTwo">
              <h6>Som utvikler og kollega</h6>
              <p>har han et stort engasjement for å skape nye produkter og tjenester som er både 
                visuelt og funksjonelt tiltalende. Han er også fokusert og dedikert til sine 
                prosjekter og har et sterkt ønske om å lykkes.<br/><br/>
                
                Som kollega er Adrian alltid klar til å hjelpe andre, spesielt når det gjelder design. 
                Med sin optimistiske personlighet, vil han være lett å jobbe med. Han er 
                også vennlig og respekterer andres ideer.</p>
            </div>
            <div className="partThree">
              <h6>Som person</h6>
              <p>har han alltid vært optimistisk. Han prøver alltid å se det gode i ting og 
                sliter ikke med å se mulighetene som ligger i situasjoner. Han er også en 
                eventyrlystig type som elsker å utforske nye steder, oppleve nye ting og møte 
                nye mennesker.<br/><br/>

                Design og kreativitet er også en stor del av Adrians liv. Han elsker å skape ting 
                og er alltid på jakt etter nye ideer å utforske. Han er alltid ivrig etter å lære 
                nye ting og å utvikle sine kreative ferdigheter.<br/><br/>

                Natur er noe Adrian virkelig setter pris på. Han elsker å tilbringe tid utendørs 
                og følger ofte oppdagelsesreiser for å utforske utsiktene og opplevelsen.<br/><br/>

                Meditasjon er også en viktig del av Adrians liv. Han bruker ofte tid på å 
                meditere og forbinde seg til øyeblikket. Dette hjelper ham med å føle seg mer 
                fokusert, energisk og avslappet.</p>
            </div>
          </div>
          <div className="whoAmIRight">
            {/*
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
            */}
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
    <Footer />
  </Layout>
  )
}

export const Head = () => <Seo title="Om meg" />

export default AboutMe
