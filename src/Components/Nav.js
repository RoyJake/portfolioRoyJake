import { useState, useEffect } from 'react';
import { motion, useMotionValueEvent, useScroll, useAnimate, } from 'framer-motion';


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
 // const [scope2, animate2] = useAnimate();

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




 return (


  <motion.nav className="navigationBar" ref={scope1}
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

   <motion.ul id='menuPage' initial='initial' animate='final' transition={{ staggerChildren: 0.2 }} toggle={isActive.toString()}

   >
    <motion.li variants={onLoadNavAnimation}><span >01.</span>Home</motion.li>
    <motion.li variants={onLoadNavAnimation}><span >02.</span>About</motion.li>
    <motion.li variants={onLoadNavAnimation}><span >03.</span>Projects</motion.li>
    <motion.li variants={onLoadNavAnimation}><span>04.</span>Contact</motion.li>
    <motion.li variants={onLoadNavAnimation}><button>Resume</button></motion.li>
   </motion.ul>

  </motion.nav>

 )

}

export default Nav;