import React, {useRef} from 'react'
import {toggle} from './ToggleAnim';

import data from '../components/data'

export default function CrewList() {    

    const crewsList = data[0].crews;

    const [crew, setCrew] = React.useState(data[0].crews[0])

    const douglasRef = useRef();
    const markRef = useRef();
    const victorRef = useRef();
    const anoushehRef = useRef();

    function handleClick(name) {
        crewsList.map(crew => crew.name.toLowerCase() === name && setCrew({...crew}))

        let refArray = [douglasRef, markRef, victorRef, anoushehRef];
        let newName = name.split(" ");

        toggle(newName[0], refArray)
    }

    return (
        <div className='crew-container'>
            <p className='crew-title'><span className='nav-number'>02</span> MEET YOUR CREW</p>
            <div className='crew-img-container'>
                <img src={crew.img} alt="Crew" className='crew-img' />
            </div>
            <div className='crew-wrapper'>
                <ul className='crew-nav'>
                    <li ref={douglasRef} onClick={() => handleClick('douglas hurley')} className="douglas active">•</li>
                    <li ref={markRef} onClick={() =>handleClick('mark shuttleworth')} className="mark">•</li>
                    <li ref={victorRef} onClick={() =>handleClick('victor glover')} className="victor">•</li>
                    <li ref={anoushehRef} onClick={() =>handleClick('anousheh ansari')} className="anousheh">•</li>
                </ul>
                <h2 className='crew-position'>{crew.position}</h2>
                <h1 className='crew-name'>{crew.name}</h1>
                <p className='crew-desc'>{crew.desc}</p>
            </div>
        </div>
    )
} 