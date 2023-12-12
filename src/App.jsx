
import elfBanner from './assets/elf-banner.png'
import './App.css'
import { Snowflakes } from './Snowflakes'
import { motion } from "framer-motion"
import { Poem } from './Poem'
import { Buttonlinks } from './Buttonlinks'
import { Navbar } from './Navbar'
import { Features } from './Features'
import { Roadmap } from './Roadmap'

function App() {

  const variants = {
    slide: {
      y: [0, 10, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
    }
  }

  return (
    <>
    <div className=''>
      <Snowflakes />
      <Navbar />
      <div className='topImageContainer'>
      <motion.div
        variants={variants}
        animate="slide"
        className='topImage'>
              <img src={elfBanner} className="logo" alt="Vite logo" />
          </motion.div>
        {/* <div className='topHeading'>It's HERE</div> */}
        <div className='topCopy'>A Christmas charity meme coin for the kids n that. Hopefully it sends…</div>
        <Buttonlinks />
      
      </div>
      <Poem /> 
      <Features />
      <Roadmap />
      </div>
    </> 
  )
}

export default App
