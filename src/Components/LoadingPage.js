import React from 'react'
import { motion } from 'framer-motion';

import './LoadingPage.css'


const LoadingPage = () => {
 return (
  <div id='loadingPage'>

   <svg xmlns="http://www.w3.org/2000/svg" width="51.063" height="58.521" viewBox="0 0 516.063 582.521">

    <g id="Group_1" data-name="Group 1" transform="translate(-282 -249)">

     <g id="Path_6" data-name="Path 6" transform="translate(282 831.521) rotate(-90)" fill="#0a192f">

     

      <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, type: 'spring', duration: 4, bounce: 0 }} d="M 157.3081665039063 19.99996948242188 L 22.96551513671875 258.03125 L 157.3081665039063 496.0625305175781 L 425.2131958007813 496.0625305175781 L 559.555908203125 258.03125 L 425.2131958007813 19.99996948242188 L 157.3081665039063 19.99996948242188 M 145.6304016113281 0 L 436.8909606933594 0 L 582.521484375 258.03125 L 436.8909606933594 516.0625 L 145.6304016113281 516.0625 L -6.103515625e-05 258.03125 L 145.6304016113281 0 Z" stroke="#64ffda" strokeWidth="15"  fill="none" />

     </g>

     <motion.text initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 2}} id="RJ" transform="translate(391 632)" fill="#64ffda" font-size="290" font-family="Poppins-Regular, Poppins"><tspan x="0" y="0">RJ</tspan></motion.text>
    </g>
   </svg>

  </div>
 )
}

export default LoadingPage;