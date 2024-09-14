import { motion } from 'framer-motion';


import './ProjectSection.css';
import github from '../Assets/githubPL.svg';
import liveIcon from '../Assets/liveIcon.svg';
import abletonVideo from '../Assets/abletonVideo.mp4'
import qrates from '../Assets/qrates.mp4'



const ProjectSection = function () {
 return (
  <section id='ProjectSection'>
   <motion.h1 className='sectionTitle' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ amount: 0.5, once: true }}><span>02.</span>Some Projects I've Built</motion.h1>

   <ul className='projectContainer'>

    <motion.li initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.5, once: true }}>
     <div className='projectWrapper'>

      <div className='projectTextWrapper'>
       <h2>Project</h2>
       <h1 className='projectTitle'>LALI onthisone</h1>
       <p className='projectDescription'>The project involves creating a dynamic and engaging website for <a href='https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2FLali_onthisone&e=AT1zP9ytxA6N7mLUhCG9YivwgxRMo-5jVr73KuJd5zQ7s7rXYAoqDwcTntC8mPcFohBFqzJ-bNQ0ac_LTbjbqcEA8ntvNCNbEto7Sw'>Lali onthisone</a>, a rap/singer artist. The website will serve as a central hub for fans, industry professionals, and new listeners to explore Lali's music, biography, upcoming events, and more.</p>
       <div className='projectLinksInWrapper'>
        <a href="https://github.com/RoyJake"><img src={github} alt="link_to_source_code"></img></a><a href="https://github.com/RoyJake"><img src={liveIcon} alt="link_to_website"></img></a>
       </div>
      </div>

      <div className='showCase'></div>

      <div className='projectLinks'>
       <a href="https://github.com/RoyJake"><img src={github} alt="link_to_source_code"></img></a><a href="https://github.com/RoyJake"><img src={liveIcon} alt="link_to_website"></img></a>
      </div>

     </div>
    </motion.li>

    <motion.li initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.5, once: true }}>
     <div className='projectWrapper'>

      <div className='projectTextWrapper'>
       <h2>Project</h2>
       <h1 className='projectTitle'>Qrates</h1>
       <p className='projectDescription'>This project is a passionate initiative created by record and cassette enthusiasts who deeply value the unique connection between musicians and their fans through physical music formats. Their mission is to empower artists to share the magic of their music on vinyl records and cassettes, making these tangible pieces of art accessible to more people.</p>
       <div className='projectLinksInWrapper'>
        <a href="https://github.com/RoyJake"><img src={github} alt="link_to_source_code"></img></a><a href="https://github.com/RoyJake"><img src={liveIcon} alt="link_to_website"></img></a>
       </div>
      </div>

      <div className='showCase'><video src={qrates} muted autoplay loop></video></div>

      <div className='projectLinks'>
       <a href="https://github.com/RoyJake"><img src={github} alt="link_to_source_code"></img></a><a href="https://github.com/RoyJake"><img src={liveIcon} alt="link_to_website"></img></a>
      </div>

     </div>
    </motion.li>

    <motion.li initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.5, once: true }}>
     <div className='projectWrapper'>

      <div className='projectTextWrapper'>
       <h2>Project</h2>
       <h1 className='projectTitle'>Ableton</h1>
       <p className='projectDescription'>This project is for a group that develop and provide unique software and hardware solutions that revolutionize music creation and performance. Their flagship products—Live, Push, Note, and Link—are designed to inspire and empower musicians, producers, and performers around the world.</p>
       <div className='projectLinksInWrapper'>
        <a href="https://github.com/RoyJake"><img src={github} alt="link_to_source_code"></img></a><a href="https://github.com/RoyJake"><img src={liveIcon} alt="link_to_website"></img></a>
       </div>
      </div>

      <div className='showCase'><video src={abletonVideo} muted autoplay loop></video></div>

      <div className='projectLinks'>
       <a href="https://github.com/RoyJake"><img src={github} alt="link_to_source_code"></img></a><a href="https://github.com/RoyJake"><img src={liveIcon} alt="link_to_website"></img></a>
      </div>

     </div>
    </motion.li>

   </ul>

  </section>
 )
}

export default ProjectSection;