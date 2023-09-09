import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/css/HomePage.css'

import Header from '../components/Header'

export default function HomePage() {

    const isHomePage = true;
    return (
        <>
            <main className='home-page'>
                <Header 
                    isHome={isHomePage}
                />
                <div className='desc-container'>
                    <p className='question'> SO, YOU WANT TO TRAVEL TO</p>
                    <h1 className='location'>SPACE</h1>
                    <p className='desc'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <Link to='destination' className='explore-btn'>EXPLORE</Link>
            </main>
        </>
    )
}