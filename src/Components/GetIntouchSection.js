import { motion } from 'framer-motion';

// importing the styles for the GetIntouchSection component
import './GetIntouchSection.css';

const GetIntouchSection = function() {
 return(
  <motion.section id="getIntouchSection" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} viewport={{ amount: 0.5, once: true }}>
   <h1><span>04.</span>What's Next?</h1>
   <h2>Get In Touch</h2>
   <p>Got a project? Whether it's big or small, drop me a line and let's work together to bring your vision to life.</p>
   <a href='mailto:royjake629@gmail.com'><button>Say Hello</button></a>
  </motion.section>

 )
};

export default GetIntouchSection;