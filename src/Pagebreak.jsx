import './Pagebreak.css'
import tree from './assets/tree.png'
import { motion, useScroll } from "framer-motion"

export function Pagebreak() {

    const variants = {
        slide: {
          scale: [1, 1.2, 1],
          y: [0, 10, 0],
          transition: { duration: 2, ease: "easeInOut", repeat: Infinity }
        }
      }

    return (
        <>
             <motion.img
              variants={variants}
              animate="slide"
             className='pageBreak' src={tree} alt='elf' />
        </>
    )   
}