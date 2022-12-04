import * as React from "react"
import Layout from "../components/layout"
import { motion, useSpring } from "framer-motion"

const Loader = ({setLoading}) => {

    const loadingDiv = {
        hidden: {
            opacity: 1,
        },
        show: {
            transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 2

            }
        },
        exit: {
            transition: {
                ease: "easeInOut",
                duration: 2
            }
        }
    }

    const loadingCircle = {
        hidden: {
            width: "0px",
            height: "0px",
            duration: 2,
            transition: {type: 'spring'}
        },
        show: {
            width: "160px",
            height: "160px",
            transition: "easeInOut",
            duration: 2,
            transition: {type: 'spring'}

        },
        exit: {
            width: 0,
            height: 0,
            transition: {delay: 4},
            duration: 2
        }
    }

    const loadingCircleText = {
        hidden: {
            opacity: 0,
            "--rotate": "0deg",
        },
        show: {
            opacity: 1,
            "--rotate": "360deg",
            transition: {
                "--rotate": {delay: 2, duration: 2, type: "spring"},
                delay: 1, 
                duration: 1}

        },
        exit: {
            width: 0,
            height: 0,
            transition: {delay: 4},
            duration: 2
        }
    }

    const loadingText = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay: 0, 
                duration: 1},


        },
        exit: {
            opacity: 0,
            width: 0,
            height: 0,
            transition: {delay: 4},
            duration: 2
        }
    }



    return (
        <Layout>
            <motion.div className="loadingPage">
                <motion.div 
                variants={loadingDiv}
                
                initial="hidden"
                animate="show"
                exit="exit" 
                className="loadingContainer">
                    <motion.div
                    className="loadingCircle"
                    variants={loadingCircle}
                    initial="hidden"
                    animate="show"
                    exit="exit" 
                    onAnimationComplete={() => setLoading(false)}
                    >
                        <motion.div
                        className="loadingText"
                        variants={loadingText}
                            initial="hidden"
                            animate="show"
                            exit="exit" 
                        >a</motion.div>
                        <div className="loadingWelcomeContainer">
                            <motion.div 
                            variants={loadingCircleText}
                            initial="hidden"
                            animate="show"
                            exit="exit" 
                            className="loadingWelcome">
                            </motion.div>
                        </div>
                        
                        {/*<motion.div
                        className="loadingPicture"
                        ></motion.div>*/}
                    </motion.div>
                </motion.div>
               
            </motion.div>
        </Layout>
    )
}

export default Loader