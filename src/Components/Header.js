import { motion } from 'framer-motion';

//importing component styles
import './Header.css';


// importing the social media icons
import github from '../Assets/github.svg';
import instagram from '../Assets/instagram.svg';
import linkedIn from '../Assets/linkedIn.svg';
import x from '../Assets/x.svg';
import email from '../Assets/email.svg';


const onLoadHeaderAnimation = {
 initial: { opacity: 0, y: 10 },
 final: { opacity: 1, y: 0 }
}

const Header = function () {
 return (
  <header>
   <motion.div className="headerTextContainer"  initial="initial" animate="final" transition={{ staggerChildren: 0.2 }} >

    <motion.h1 variants={onLoadHeaderAnimation}>Hi, my name is</motion.h1>
    <motion.h2 variants={onLoadHeaderAnimation}>Roy Jake.</motion.h2>
    <motion.h3 variants={onLoadHeaderAnimation}>I build web ideas from front to back.</motion.h3>
    <motion.p variants={onLoadHeaderAnimation}>I'm a software engineer specializing in full-stack web development. I create dynamic and interactive web applications using both front-end and back-end frameworks such as react.js, express.js and Node.js. </motion.p>

    <motion.div className='socialIcons' variants={onLoadHeaderAnimation}>
     <a href='https://github.com/RoyJake'><img src={github} alt='github'></img></a>
     <a href='https://github.com/RoyJake'><img src={linkedIn} alt='linkedIn'></img></a>
     <a href='https://github.com/RoyJake'><img src={email} alt='email'></img></a>
     <a href='https://github.com/RoyJake'><img src={instagram} alt='instagram'></img></a>
     <a href='https://github.com/RoyJake'><img src={x} alt='x'></img></a>
    </motion.div>

   </motion.div>
  </header>
 )
}

export default Header;