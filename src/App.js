import React, { useState, useEffect } from 'react';
import "./App.css"
import Navigation from './Components/Navigation.jsx';
import Header from './Components/Header.jsx';
import Apropos from './Components/Apropos';
import Service from './Components/Service.jsx';
import Portfolio from './Components/Portfolio.jsx';
import Témoignages from './Components/Témoignages.jsx';
import Contact from './Components/Contact.jsx';
import ScrollTopArrow from './Components/ScrollTopArrow';
import JsonData from "./data/data.json";
import "./CSS/ScrollTopArrow.css";
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});



function App() {
 

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);

 
  return <div>
 <Navigation/>
 <Header data={landingPageData.Acceuil}/>
 <Apropos data={landingPageData.About} />
 <Service data={landingPageData.Services}/>
 <Portfolio data={landingPageData.Portfolio}/>
 <Témoignages data={landingPageData.Témoignages}/>
 <Contact data={landingPageData.Contact} />
 <ScrollTopArrow/>

  </div>

 
}

export default App;
