
import elfBanner from './assets/elf-banner.png'
import './App.css'
import { Snowflakes } from './Snowflakes'
import { motion } from "framer-motion"
import { Poem } from './Poem'
import { Buttonlinks } from './Buttonlinks'
import { Navbar } from './Navbar'
import { Features } from './Features'

function App() {

  const variants = {
    slide: {
      y: [0, 10, 0],
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
    }
  }

  return (
    <>
      <Snowflakes />
      <Navbar />
      <div className='topImageContainer'>
        <div className='topHeading'>$BADELF</div>
        <div className='topCopy'>Need to add some copy in here to make this section look more interesting. Just a bit more text to wrap the line.</div>
        <Buttonlinks />
        <motion.div
        variants={variants}
        animate="slide"
        className='topImage'>
              <img src={elfBanner} className="logo" alt="Vite logo" />
          </motion.div>
      </div>
      <Poem /> 
      <Features />
    </> 
  )
}

export default App
