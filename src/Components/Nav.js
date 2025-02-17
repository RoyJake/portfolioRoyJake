import { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll, useAnimate, useTransform } from 'framer-motion';


//importing styles for the Nav component
import '../Components/Nav.css';


const navVariants = {
 hidden: { y: "-100%" },
 vissible: { y: 0 },

}

const onLoadNavAnimation = {
 initial: { opacity: 0, y: "-15px" },
 final: { opacity: 1, y: 0 }
}



const Nav = function () {

 const [isActive, setIsActive] = useState(false);
 const [hidden, setHidden] = useState(false);
 const { scrollY } = useScroll();
 const [scope1, animate1] = useAnimate();
 const boxShadow = useTransform(scrollY, [0, 100], ['none', '5px 5px 15px rgba(0, 0, 0, 0.3)']);
 

 useEffect(() => {
  const menuPage = document.querySelector('#menuPage');
  window.addEventListener('resize', () => {
   if (window.innerWidth > 780) {
    menuPage.style.transform = 'translateY(1)';
   }
  })

 });

 const menuAnimation = async (isActive) => {
  await animate1("#menuPage", { scaleY: isActive ? 1 : 0 })
  // await animate1("li", { x: isActive ? 0 : '15px' }, { delay: stagger(0.2, { startDelay: 1 }) });
 }

 const menuBurgerAnimation = async (isActive) => {
  animate1("#before", { transform: isActive ? ['translateY(0)', 'rotate(405deg)'] : ['rotate(0deg)', 'translateY(-10px)'] });

  animate1("#middle", { backgroundColor: isActive ? '#112240' : '#64ffda' });

  animate1("#after", { transform: isActive ? ['translateY(0)', 'rotate(-405deg)'] : ['rotate(0deg)', 'translateY(10px)'] });

 }


 useMotionValueEvent(scrollY, "change", (latest) => {
  if (isActive) {
   return
  }

  const previous = scrollY.getPrevious();
  if (latest > previous) {
   setHidden(true)
  } else {
   setHidden(false)
  }
 });

 const handleMenuOff = function () {
  setIsActive(isActive => !isActive)
  menuAnimation(!isActive);
  menuBurgerAnimation(!isActive);

 }




 return (


  <motion.nav className="navigationBar" ref={scope1} style={{ boxShadow: boxShadow, transition: 'box-shadow 0.3s ease', }}
   variants={navVariants}
   animate={hidden ? "hidden" : "vissible"}
  >

   <motion.div className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} />

   <motion.div className='menuWrapper' onClick={() => {
    setIsActive(isActive => !isActive)
    menuAnimation(!isActive);
    menuBurgerAnimation(!isActive);
   }}>
    <motion.div id="before" className="menu" />
    <motion.div id="middle" className="menu" />
    <motion.div id="after" className="menu" />
   </motion.div>

   <motion.ul id='menuPage' initial='initial' animate='final' transition={{ staggerChildren: 0.2 }} toggle={isActive.toString()} onClick={handleMenuOff}

   >
    <motion.li variants={onLoadNavAnimation}><a href='#header_section'><span >01.</span>Home</a></motion.li>
    <motion.li variants={onLoadNavAnimation}><a href='#AboutSection'><span >02.</span>About</a></motion.li>
    <motion.li variants={onLoadNavAnimation}><a href='#ProjectSection'><span >03.</span>Projects</a></motion.li>
    <motion.li variants={onLoadNavAnimation}><a href='#getIntouchSection'><span>04.</span>Contact</a></motion.li>
    <motion.li variants={onLoadNavAnimation}><button><a href="https://portfolio-backend-fbhu.onrender.com/download/Resume(Roy Jake).pdf" download>Resume</a></button></motion.li>
   </motion.ul>

  </motion.nav>

 )

}

export default Nav;