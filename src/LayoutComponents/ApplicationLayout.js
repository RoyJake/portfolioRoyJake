import { useEffect, useState } from 'react'


// importing the components of the website.
import LoadingPage from '../Components/LoadingPage.js'
import Nav from '../Components/Nav.js';
import Header from '../Components/Header.js';
import AboutSection from '../Components/AboutSection.js';
import ProjectSection from '../Components/ProjectSection.js';
import GetIntouchSection from '../Components/GetIntouchSection.js';
import Footer from '../Components/Footer.js';

// inporting the styles for the ApplicationLayout component
import './ApplicationLayout.css';




const ApplicationLayout = function () {
 const [homepageReady, setHomepageReady] = useState(false);

 useEffect(() => {
  const timeOut = setTimeout(() => {
   setHomepageReady(true);
  }, 3500)

  return () => clearTimeout(timeOut);
 }, [])

 return (
  homepageReady ?
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
   : <LoadingPage />

 );
};

export default ApplicationLayout;

