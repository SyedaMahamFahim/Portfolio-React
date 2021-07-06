import React from 'react'
import {Route,Switch } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';


function AppRouter(){
  return(
    <>
    
    <Switch>
      <Route exact path="/" component={Header}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/services" component={Skills}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    
    </>
  )
}
export default AppRouter;
