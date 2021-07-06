import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import MenuData from "./MenuData"
import './Header.css'
import "../App.css"
import SocialData from './SocialData'
import { FaBars, } from 'react-icons/fa';
const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="nav-left-side">
                        <h1 className="logo">Syeda Maham Fahim</h1>
                    </div>
                        <ul className="menu-ul">
                            {
                                MenuData.map((MenuItem, Index) => {
                                    return (
                                        <>
                                            <li className="menu-li display-menu"
                                                key={Index}>
                                               
                                                <a href={MenuItem.url}>{MenuItem.pageName} </a>
                                                
                                                </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                  
                    <div className="mobile-icon"> <FaBars className="menu-bar-icon" onClick={() => setDisplayMenu(!displayMenu)} />
                    </div>
                </nav>
               

                     {
                        displayMenu ? 
                        <div className="mobile-nav" style={{overflow:"hidden"}}>
                            <ul className="mobile-menu-ul">
                                {
                                    MenuData.map((MenuItem, Index) => {
                                        return (
                                            <>
                                                <li className="menu-li display-menu"
                                                    key={Index}>
                                                    <a href={MenuItem.url}>{MenuItem.pageName}</a></li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                            : <h1 style={{display:"none"}}>hey</h1>
            } 

            <div class="hero-section">
                <h1>Hello,I am <span className="span-color">Syeda Maham Fahim</span> <br />   
                I am <span className="span-color">full stack developer</span> </h1>
                <div className="soical-links">
                <ul className="social-icon-li">
                            {
                                SocialData.map((SocialLink, Index) => {
                                    return (
                                        <>
                                            <li className="social-icon-li"
                                                key={Index}>
                                                <a href={SocialLink.url}> <SocialLink.iconName/> </a></li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>
        </header> 
      </>
  )
}
export default Header