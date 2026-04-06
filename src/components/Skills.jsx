import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaJava,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaCode,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiPostman,
} from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, color: '#f89820' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e' },
        { name: 'Python', icon: <FaPython />, color: '#3776ab' },
        { name: 'SQL', icon: <FaDatabase />, color: '#336791' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: '#61dafb' },
        { name: 'HTML5', icon: <SiHtml5 />, color: '#e34f26' },
        { name: 'CSS3', icon: <SiCss3 />, color: '#1572b6' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952b3' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06b6d4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
        { name: 'Node.js', icon: <FaNode />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
        { name: 'REST APIs', icon: <FaCode />, color: '#ff6b6b' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
        { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
        { name: 'OOP', icon: <FaCode />, color: '#9b59b6' },
        { name: 'MVC', icon: <FaCode />, color: '#e74c3c' },
      ],
    },
  ]

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.div
          className="skills-container"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{ 
                      scale: 1.15, 
                      y: -15,
                      rotateY: 10,
                      rotateX: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -20 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
