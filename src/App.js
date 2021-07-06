import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Skills from './Skills/Skills';
// import Portfolio from './Portfolio/Portfolio'
import PortfolioApp from './PortfolioTabs/PortfolioApp'

import Contact from './Contact/Contact';

function App (){
        

        return(
          <>
       <Header/>
       <About/>
       <Skills/>
       {/* <Portfolio/> */}
       <PortfolioApp/>
       
       <Contact/>
          </>
        )
    }


 export default App;


