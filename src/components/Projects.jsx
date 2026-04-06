import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaVideo, FaShoppingCart, FaGamepad, FaCalculator, FaChess, FaKeyboard } from 'react-icons/fa'

const ProjectCard = ({ project, index, isInView }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="project-header">
        <div className="project-icon" style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
          {project.icon}
        </div>
        <div className="project-links">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-highlights">
          {project.highlights.map((highlight, idx) => (
            <span key={idx} className="highlight-tag">
              {highlight}
            </span>
          ))}
        </div>

        <div className="project-technologies">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'MEETX',
      description: 'Real-time video conferencing web application with secure video/audio calling, chat messaging, and file sharing features.',
      technologies: ['React.js', 'Node.js', 'WebRTC', 'Socket.IO', 'MongoDB'],
      icon: <FaVideo />,
      githubUrl: 'https://github.com/nikitaaaa123',
      color: '#6366f1',
      highlights: ['Real-time Communication', 'WebRTC Integration', '20% Performance Improvement'],
    },
    {
      title: 'CARA',
      description: 'Fully developed e-commerce platform with product listings, authentication, shopping cart, and secure checkout.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      icon: <FaShoppingCart />,
      githubUrl: 'https://github.com/nikitaaaa123',
      color: '#8b5cf6',
      highlights: ['Complete E-Commerce Solution', 'Payment Gateway Integration', 'Responsive Design'],
    },
    {
      title: 'ATM Machine Project',
      description: 'A comprehensive ATM simulation system built with Java, implementing core banking operations and transaction management.',
      technologies: ['Java', 'OOP', 'Console Application'],
      icon: <FaCalculator />,
      githubUrl: 'https://github.com/nikitaaaa123/ATM_Machine_Project',
      color: '#ec4899',
      highlights: ['Banking Operations', 'Transaction Management', 'OOP Principles'],
    },
    {
      title: 'Chess Game',
      description: 'Interactive chess game implementation with full game logic, move validation, and checkmate detection.',
      technologies: ['Java', 'OOP', 'Game Development'],
      icon: <FaChess />,
      githubUrl: 'https://github.com/nikitaaaa123/ChessGame',
      color: '#10b981',
      highlights: ['Game Logic', 'Move Validation', 'Checkmate Detection'],
    },
    {
      title: 'Typing Speed Game',
      description: 'A fun and interactive typing speed test application to improve typing skills and measure WPM.',
      technologies: ['Java', 'GUI', 'Game Development'],
      icon: <FaKeyboard />,
      githubUrl: 'https://github.com/nikitaaaa123/TypingSpeedGame',
      color: '#f59e0b',
      highlights: ['WPM Calculation', 'Real-time Feedback', 'Skill Improvement'],
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'Classic Tic Tac Toe game with AI opponent and interactive gameplay.',
      technologies: ['Java', 'OOP', 'Game Logic'],
      icon: <FaGamepad />,
      githubUrl: 'https://github.com/nikitaaaa123/TicTacToeGame',
      color: '#ef4444',
      highlights: ['AI Opponent', 'Interactive UI', 'Game Logic'],
    },
    {
      title: 'Calculator Project',
      description: 'A feature-rich calculator application with basic and advanced mathematical operations.',
      technologies: ['Java', 'GUI', 'Mathematical Operations'],
      icon: <FaCalculator />,
      githubUrl: 'https://github.com/nikitaaaa123/CalculatorProject',
      color: '#06b6d4',
      highlights: ['Basic Operations', 'Advanced Functions', 'User-Friendly Interface'],
    },
  ]

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          Projects & Training Work
        </motion.h2>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
