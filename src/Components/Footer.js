// importing the styles for the footer component
import './Footer.css'

const Footer = function () {
 return (
  <footer>

   <ul id='wrapper'>
    <li id='contactInfo'>
     <h1>Contact information</h1>
     <p>Feel free to reach out to me any time. I prefer to talk over
      email, especially since we may be a few time zones away.<br></br>
      <span>
       <a href='mailto:royjake629@gmail.com'>royjake629@gmail.com</a><br />
       <a href='tel:+233547023087'>+233-547-0230-87</a>
      </span>
     </p>
    </li>

    <li id='availability'>
     <h1>Current availability</h1>
     <p>I will be happy to discuss new opportunities. Let's get in touch!
     </p>
    </li>

    <li id='socials'>
     <h1>Follow me on</h1>
     <ul>
      <li><a href='https://www.instagram.com/royjake.codes/' target='_blank' rel="noreferrer">Instagram</a></li>
      <li><a href='https://www.linkedin.com/in/roy-jake-3253a8321/' target='_blank' rel="noreferrer" >LinkedIn</a></li>
      <li><a href='https://x.com/ROYJAKE_RJ' target='_blank' rel="noreferrer">X</a></li>
     </ul>
    </li>
   </ul>

   <div id='copyright'>
    <a href='https://royjake.onrender.com/'>.</a>
    <p>© 2019 — 2024<br />Built by Roy Jake.</p>
   </div>
  </footer>
 )
}

export default Footer;