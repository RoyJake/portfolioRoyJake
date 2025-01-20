import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// importing styles for the aboutSection
import './AboutSection.css';

const inViewAnimation = {
 hidden: { opacity: 0, y: "100px" },
 visible: {
  opacity: 1, y: 0,
  transition: { duration: 0.6 }
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
     Hello! My name is Roy, and I’m a software engineer with a strong interest in Artificial Intelligence, specializing in full-stack web development. With in-depth expertise in AI tools such as Pytorch, NumPy, Pandas, and Matplotlib, alongside full-stack technologies, I have the ability to create seamless, dynamic, and efficient applications from concept to deployment.
    </p>
    <p>
     On the front-end, I excel at bringing web designs to life, crafting intuitive and engaging user interfaces with modern tools and frameworks like HTML, CSS, JavaScript/TypeScript, React.js/Next.js, and Framer Motion. My passion for design and user experience ensures that every application I build is not only highly functional but also delightful to use.
    </p>
    <p>
     On the back-end, I leverage my expertise in server-side languages and databases, including Node.js, express.js, MySQL, and MongoDB(NoSQL), to develop scalable and secure server architectures. I am adept at designing and implementing robust APIs, and ensuring data integrity and security.
    </p>
    <p>
     Here are a few technlogies I've been working with recently:
    </p>

    <div className='tools'>
     <ul >
      <li>Python</li>
      <li >TypeScript/JavaScript (ES6+)</li>
      <li>HTML & CSS</li>
      <li>Pytorch</li>
      <li>Node.js</li>
      <li>MySQL</li>
     </ul>
    </div>
   </motion.div>

   <motion.div animate={isInView ? "visible" : "hidden"} variants={inViewAnimation} className='picture' />



  </section>
 )

}

export default AboutSection;