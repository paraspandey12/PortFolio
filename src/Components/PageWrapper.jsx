import React, { Children } from 'react'
import {motion} from "framer-motion"

const PageWrapper = ({children}) => {
    const pageVariant= {
       initial: {
        opacity: 0,
        x:'-100vw' ,
           
       },
       in: {
        opacity: 1,
        x: 0,
    },
       out: {
        opacity:0,
        x: '100vw',
       },
    }
    const pageTransition ={
         type: 'tween',
         ease: 'anticipate',
         duration: .75,
    }
  return (
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariant}
    transition={pageTransition}
    >
        {children}
    </motion.div>
  )
}

export default PageWrapper