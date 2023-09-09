import React, {useRef} from 'react'
import './css/Header.css'
import logo from '../images/shared/logo.svg'
import hamburger from '../images/shared/icon-hamburger.svg'
import close from '../images/shared/icon-close.svg'

import { Link } from 'react-router-dom'

export default function Header(props) {

    const [isBtnOpen, setIsBtnOpen] = React.useState(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const openRef = useRef()
    const closeRef = useRef()

    function handleClick() {
        setIsBtnOpen(!isBtnOpen)
        setIsMenuOpen(!isMenuOpen)
    }

    let homePage = props.isHome ? 'active' : ""
    let destinationPage = props.isDestination ? 'active' : ""
    let crewPage = props.isCrew ? 'active' : ""
    let technologyPage = props.isTechnology ? 'active' : ""

    return (
        <header>
            <nav>
                <img src={logo} className='logo-icon' alt='Logo' />
                <img ref={openRef} src={hamburger} onClick={handleClick} className={`menu-btn ${!isBtnOpen && 'active'}`} alt="Menu Icon" />
                <img ref={closeRef} src={close} onClick={handleClick} className={`close-btn ${isBtnOpen && 'active'}`}alt='Close Icon' />
                <div className={`mobile-view-container ${isMenuOpen ? 'active' : ""}`}> 
                    <div className="link-container">
                        <Link to='/'><span className='nav-number'>00</span>Home</Link>
                        <Link to='/destination'><span className='nav-number'>01</span>Destination</Link>
                        <Link to="/crew"><span className='nav-number'>02</span>Crew</Link>
                        <Link to="/technology"><span className='nav-number'>03</span>Technology</Link>
                    </div>
                </div>
                <div className='tablet-view-container'>
                    <div className="tablet-link-container">
                        <Link className={`home-link ${homePage}`} to='/'>Home</Link>
                        <Link className={`destination-link ${destinationPage}`} to='/destination'>Destination</Link>
                        <Link className={`crew-link ${crewPage}`} to="/crew">Crew</Link>
                        <Link className={`technology-link ${technologyPage}`} to="/technology">Technology</Link>
                    </div>
                </div>
                <div className='desktop-view-container'>
                    <div className="desktop-link-container">
                        <Link className={`home-link ${homePage}`} to='/'><span className='desktop-number'>00</span>Home</Link>
                        <Link className={`destination-link ${destinationPage}`} to='/destination'><span className='desktop-number'>01</span>Destination</Link>
                        <Link className={`crew-link ${crewPage}`} to="/crew"><span className='desktop-number'>02</span>Crew</Link>
                        <Link className={`technology-link ${technologyPage}`} to="/technology"><span className='desktop-number'>03</span>Technology</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}