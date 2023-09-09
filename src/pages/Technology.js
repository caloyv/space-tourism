import React from 'react'
import './css/Technology.css'
import Header from '../components/Header'
import TechnologyList from '../components/TechnologyList'

export default function Technology() {
    const isTehnologyPage = true;
    return (
        <main className='technology'>
            <Header 
                isTechnology = {isTehnologyPage}
            />
            <TechnologyList />
        </main>
    )
}