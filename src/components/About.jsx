import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const education = [
    {
      icon: <FaGraduationCap />,
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'VIT BHOPAL UNIVERSITY, SEHORE',
      year: '2025',
    },
    
  ]

  const highlights = [
    {
      icon: <FaCode />,
      title: 'Full Stack Development',
      description: 'Building end-to-end applications with React.js, Spring Boot, and REST APIs',
    },
    {
      icon: <FaRocket />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and best practices in software development',
    },
  ]

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-card">
              <h3>Background</h3>
              <p>
                I'm a Java Full Stack Developer with practical experience in building scalable web applications.
                My journey in software development started with a passion for problem-solving and creating
                innovative solutions that make a difference.
              </p>
            </div>

            <div className="about-card">
              <h3>Interests</h3>
              <p>
                I'm passionate about full-stack development, particularly focusing on creating seamless user
                experiences and robust backend systems. I enjoy working with modern technologies and
                implementing best practices in software engineering.
              </p>
            </div>

            <div className="about-card">
              <h3>Currently Learning</h3>
              <p>
                I'm continuously expanding my skills in advanced React patterns, microservices architecture,
                cloud technologies, and exploring AI/ML integration in web applications. I believe in
                staying updated with the latest industry trends and technologies.
              </p>
            </div>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="education-section" variants={itemVariants}>
            <h3 className="education-title">Education</h3>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="education-icon">{edu.icon}</div>
                  <div className="education-content">
                    <h4>{edu.title}</h4>
                    <p>{edu.institution}</p>
                    <span className="education-year">{edu.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
