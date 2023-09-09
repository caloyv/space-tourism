import React, {useRef} from 'react'
import data from './data'

import {toggle} from './ToggleAnim';

import launchDesktop from '../images/technology/image-launch-vehicle-portrait.jpg'
import spaceportDesktop from '../images/technology/image-spaceport-portrait.jpg'
import capsuleDesktop from '../images/technology/image-space-capsule-portrait.jpg'

export default function TechnologyList() {
    let techList = data[0].technology
    const [tech, setTech] = React.useState(
        window.innerWidth >= 1280 ? {...data[0].technology[0], img: launchDesktop} : {...data[0].technology[0]}
        )
    const oneRef = useRef();const twoRef = useRef();const threeRef = useRef();
    
    const [deskSize, setDeskSize] = React.useState(window.innerWidth);

    const imgRef = useRef()

    React.useEffect(() => {
        
        function activeImg() {
            if(oneRef.current.classList[1] === 'active') 
                return deskSize > 1280 ? launchDesktop : data[0].technology[0].img;
            else if (twoRef.current.classList[1] === 'active')
                return deskSize > 1280 ? spaceportDesktop : data[0].technology[1].img;
            else if (threeRef.current.classList[1] === 'active')
                return deskSize > 1280 ? capsuleDesktop : data[0].technology[2].img;
        }

        let deskImg = activeImg();

        if (deskSize >= 1280) 
            imgRef.current.src = deskImg;
        else if (deskSize < 1280) 
            imgRef.current.src = deskImg

        function event() {
            setDeskSize(window.innerWidth)
        }

        window.addEventListener('resize', event)
        return () => window.removeEventListener('resize', event)
    }, [deskSize])



    function handleClick(e, technology) {
        techList.map(tech => tech.title === technology && setTech(() => {
            if(tech.number === "one") 
                return deskSize >= 1280 ? {...tech, img: launchDesktop} : {...tech};
            else if (tech.number === "two")
                return deskSize >= 1280 ? {...tech, img: spaceportDesktop} : {...tech};
            else if (tech.number === "three")
                return deskSize >= 1280 ? {...tech, img: capsuleDesktop} : {...tech};
        }))
        let refArray = [oneRef, twoRef, threeRef];
        toggle(e.target.className, refArray)
    }

    return(
        <div className='technology-container'>
            <p className='technology-title'><span className='nav-number'>03</span> SPACE LAUNCH 101</p>
            <div className='technology-img-container'>
                <img ref={imgRef} src={tech.img} alt="Technology" className='technology-img' />
            </div>
            <div className='technology-wrapper'>
                <ul className='technology-nav'>
                    <li ref={oneRef} onClick={(e) => handleClick(e,'LAUNCH VEHICLE')} className="one active">1</li>
                    <li ref={twoRef} onClick={(e) =>handleClick(e,'SPACEPORT')} className="two">2</li>
                    <li ref={threeRef} onClick={(e) =>handleClick(e,'SPACE CAPSULE')} className="three">3</li>
                </ul>
                <div className='tech-desc-wrapper'>
                    <h2 className='technology-position'>THE TERMINOLOGY…</h2>
                    <h1 className='technology-name'>{tech.title}</h1>
                    <p className='technology-desc'>{tech.desc}</p>
                </div>
            </div>
        </div>
    )
}