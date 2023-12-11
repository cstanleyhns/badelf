import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import elfBanner from './assets/elf-banner.png'
import './App.css'
import { Snowflakes } from './Snowflakes'
import { motion, useScroll } from "framer-motion"

function App() {


  return (
    <>
    <Snowflakes />
      <motion.div
       initial={{y: "-30px", scale: 0.5 }}
       whileInView={{y: "0px", scale: 1 }}
       transition={{ duration: 0.5, ease: "easeOut" }}>
          <img src={elfBanner} className="logo" alt="Vite logo" />
      </motion.div>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
