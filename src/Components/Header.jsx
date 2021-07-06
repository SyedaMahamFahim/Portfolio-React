import React from 'react'
import '../Css/Header.css'

const Header=()=>{
    
    return(
      <>
     <div>
  <nav className="container" id="#nav-bar-container">
    <div className="logo"><span id="first-name">Syeda</span>
      <span id="middle-name">Maham</span>
    </div>
    <div className="menu">
      <i className="fa fa-bars" aria-hidden="true" id="menu-bar" />
      <ul className="menu-list">
        <li className="list-items"> <a href="#maham" className="list-item-link"> Home</a></li>
        <li className="list-items"><a href="#" className="list-item-link">About</a></li>
        <li className="list-items"><a href className="list-item-link">Education</a></li>
        <li className="list-items"><a href="#" className="list-item-link"> Experience</a></li>
        <li className="list-items"><a href="#" className="list-item-link">Portfolio</a></li>
        <li className="list-items"><a href="#" className="list-item-link">Projects</a></li>
        <li className="list-items"><a href="#" className="list-item-link">Blog</a></li>
        <li className="list-items"><a href="#" className="list-item-link">Contact</a></li>
      </ul>
    </div>
  </nav>
  
  <div id="show-menu">
    <ul className="mobile-menu-list">
      <li className="mobile-list-items">Home</li>
      <li className="mobile-list-items">About</li>
      <li className="mobile-list-items">Education</li>
      <li className="mobile-list-items">Experience</li>
      <li className="mobile-list-items">Portfolio</li>
      <li className="mobile-list-items">Projects</li>
      <li className="mobile-list-items">Blog</li>
      <li className="mobile-list-items">Contact</li>
    </ul>
  </div>
</div>
      </>
  )
}
export default Header