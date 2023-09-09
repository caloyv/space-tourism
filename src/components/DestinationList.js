import React, {useRef} from 'react'
import data from '../components/data'
import {toggle} from './ToggleAnim';

export default function DestinationList() {
    const locationList = data[0].planets;

    const [destination, setDestination] = React.useState(data[0].planets[0])
    
    const moonRef = useRef()
    const marsRef = useRef()
    const europaRef = useRef()
    const titanRef = useRef()


    function handleClick(location) {
        locationList.map(info => info.planetName === location && setDestination({...info}))

        let refArray = [moonRef, marsRef, europaRef, titanRef];

        toggle(location.toLowerCase(), refArray)
    }

    return (
        <div className='destination-container'>
            <div className='destination-wrapper wrapper-1'>
                <p className='destination-title'><span className='nav-number'>01</span> PICK YOUR DESTINATION</p>
                <div className='destination-img-container'>
                    <img src={destination.planet} alt="Planet" className='destination-planet' />
                </div>
            </div>
            <div className='destination-wrapper wrapper-2'>
                <ul className='destination-nav'>
                    <li ref={moonRef} onClick={() => handleClick("MOON")} className={`moon active`}>MOON</li>
                    <li ref={marsRef} onClick={() => handleClick("MARS")} className={`mars`}>MARS</li>
                    <li ref={europaRef} onClick={() => handleClick("EUROPA")} className={`europa`}>EUROPA</li>
                    <li ref={titanRef} onClick={() => handleClick("TITAN")} className={`titan`}>TITAN</li>
                </ul>
                <h1 className='destination-name'>{destination.planetName}</h1>
                <p className='destination-desc'>{destination.desc}</p>
                <div className='distance-container'>
                    <div>
                        <p className='avg-distance'>AVG. DISTANCE</p>
                        <h2 className='distance'>{destination.distance}</h2>
                    </div>
                    <div>
                        <p className='est-travel-time'>EST. TRAVEL TIME</p>
                        <h2 className='travel-time'>{destination.travelTime}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}