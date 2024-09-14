import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// importing styles for the aboutSection
import './AboutSection.css';

const inViewAnimation = {
 hidden: { opacity: 0, y: "100px" },
 visible: { opacity: 1, y: 0,
  transition: { duration: 0.6}
 }
}


const AboutSection = function () {

 const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.2 });

 return (
  <section id='AboutSection'>
   <motion.div ref={ref} animate={isInView ? "visible" : "hidden"} variants={inViewAnimation} className='aboutTextWrapper'>
    <motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ amount: 0.5, once: true }}><span>01.</span>About Me</motion.h1>
    <p>
     Hello! My name is Roy, a software engineer specializing in full-stack web development. With a robust understanding of both front-end and back-end technologies, I have the ability to craft seamless, dynamic, interactive and efficient web applications from concept to deployment.
    </p>
    <p>
     On the front-end, I excel in bring web designs and concepts to life, creating intuitive and engaging user interfaces using modern tools and frameworks such as HTML, CSS, JavaScript, React.js, Framer Motion. My interest in design and user experience ensures that every application I build is not only functional but also delightful to use.
    </p>
    <p>
     On the back-end, I leverage my expertise in server-side languages and databases, including Node.js, express.js, MySQL, and MongoDB(NoSQL), to develop scalable and secure server architectures. I am adept at designing and implementing robust APIs, and ensuring data integrity and security.
    </p>
    <p>
     Here are a few technlogies I've been working with recently:
    </p>

    <div className='tools'>
     <ul >
      <li >JavaScript (ES6+)</li>
      <li>React</li>
      <li>Node.js</li>
      <li>HTML & CSS</li>
      <li>Express.js</li>
      <li>Framer Motion</li>
     </ul>
    </div>
   </motion.div>

   <motion.div animate={isInView ? "visible" : "hidden"} variants={inViewAnimation} className='picture' />



  </section>
 )

}

export default AboutSection;