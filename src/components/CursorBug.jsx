import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { FaBug } from 'react-icons/fa'

const CursorBug = () => {
  const [isVisible, setIsVisible] = useState(true)

  // Smooth spring animation for cursor following
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 300 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  if (!isVisible) return null

  const bugContent = (
    <motion.div
      className="cursor-bug"
      style={{
        x,
        y,
      }}
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        rotate: {
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <div className="bug-container">
        <div className="bug-antenna antenna-left">
          <div className="antenna-tip"></div>
        </div>
        <div className="bug-antenna antenna-right">
          <div className="antenna-tip"></div>
        </div>
        <div className="bug-wings wing-left"></div>
        <div className="bug-wings wing-right"></div>
        <div className="bug-body">
          <FaBug />
        </div>
        <div className="bug-shadow"></div>
      </div>
    </motion.div>
  )

  return createPortal(bugContent, document.body)
}

export default CursorBug
