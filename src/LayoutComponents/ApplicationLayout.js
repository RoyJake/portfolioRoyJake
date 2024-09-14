


// importing the components of the website.
import Nav from '../Components/Nav.js';
import Header from '../Components/Header.js';
import AboutSection from '../Components/AboutSection.js';
import ProjectSection from '../Components/ProjectSection.js';
import GetIntouchSection from '../Components/GetIntouchSection.js';
import Footer from '../Components/Footer.js';

// inporting the styles for the ApplicationLayout component
import './ApplicationLayout.css';




const ApplicationLayout = function () {


 return (
  <>

   <Nav />
   <main>
    <Header />
    <AboutSection />
    <ProjectSection />
    <GetIntouchSection />
    <Footer />
   </main>

  </>
 );
};

export default ApplicationLayout;

