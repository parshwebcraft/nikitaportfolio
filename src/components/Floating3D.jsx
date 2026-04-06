import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaRocket, FaCog, FaCube, FaGem } from 'react-icons/fa'

const Floating3D = () => {

  const floatingObjects = [
    {
      icon: <FaCode />,
      size: 40,
      delay: 0,
      duration: 20,
      x: '10%',
      y: '20%',
      color: '#6366f1',
    },
    {
      icon: <FaLaptopCode />,
      size: 50,
      delay: 2,
      duration: 25,
      x: '80%',
      y: '30%',
      color: '#8b5cf6',
    },
    {
      icon: <FaRocket />,
      size: 45,
      delay: 4,
      duration: 18,
      x: '20%',
      y: '70%',
      color: '#ec4899',
    },
    {
      icon: <FaCog />,
      size: 35,
      delay: 1,
      duration: 30,
      x: '70%',
      y: '60%',
      color: '#10b981',
    },
    {
      icon: <FaCube />,
      size: 40,
      delay: 3,
      duration: 22,
      x: '50%',
      y: '15%',
      color: '#f59e0b',
    },
    {
      icon: <FaGem />,
      size: 38,
      delay: 5,
      duration: 24,
      x: '90%',
      y: '80%',
      color: '#06b6d4',
    },
  ]

  return (
    <div className="floating-3d-container">
      {floatingObjects.map((obj, index) => (
        <motion.div
          key={index}
          className="floating-3d-object"
          style={{
            left: obj.x,
            top: obj.y,
            width: `${obj.size}px`,
            height: `${obj.size}px`,
            '--obj-color': obj.color,
          }}
          animate={{
            y: [
              Math.sin(index) * 30,
              Math.sin(index + Math.PI) * 30,
              Math.sin(index) * 30,
            ],
            x: [
              Math.cos(index) * 20,
              Math.cos(index + Math.PI) * 20,
              Math.cos(index) * 20,
            ],
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            y: {
              duration: obj.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              duration: obj.duration * 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotateX: {
              duration: obj.duration,
              repeat: Infinity,
              ease: 'linear',
            },
            rotateY: {
              duration: obj.duration * 1.5,
              repeat: Infinity,
              ease: 'linear',
            },
            rotateZ: {
              duration: obj.duration * 0.8,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          <div className="floating-icon">{obj.icon}</div>
          <div className="floating-glow"></div>
        </motion.div>
      ))}
    </div>
  )
}

export default Floating3D
