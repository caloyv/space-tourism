
import Moon from '../images/destination/image-moon.png'
import Mars from '../images/destination/image-mars.png'
import Europa from '../images/destination/image-europa.png'
import Titan from '../images/destination/image-titan.png'

import douglas from '../images/crew/image-douglas-hurley.png'
import mark from '../images/crew/image-mark-shuttleworth.png'
import victor from '../images/crew/image-victor-glover.png'
import anousheh from '../images/crew/image-anousheh-ansari.png'

import launch from '../images/technology/image-launch-vehicle-landscape.jpg'
import spaceport from '../images/technology/image-spaceport-landscape.jpg'
import capsule from '../images/technology/image-space-capsule-landscape.jpg'


const data = [
        {
            planets: [
                {
                    planet: Moon,
                    planetName: "MOON",
                    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                    distance: "384,400 KM",
                    travelTime: "3 DAYS"
                },
                {
                    planet: Mars,
                    planetName: "MARS",
                    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                    distance: "225 MIL. km",
                    travelTime: "9 months"
                },
                {
                    planet: Europa,
                    planetName: "EUROPA",
                    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                    distance: "628 MIL. km",
                    travelTime: "3 years"
                },
                {
                    planet: Titan,
                    planetName: "TITAN",
                    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                    distance: "1.6 BIL. km",
                    travelTime: "7 years"
                },
            ],
            crews: [
                {
                    name: 'DOUGLAS HURLEY',
                    img: douglas,
                    position: "COMMANDER",
                    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
                },
                {
                    name: 'MARK SHUTTLEWORTH',
                    img: mark,
                    position: "MISSION SPECIALIST",
                    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. "
                },
                {
                    name: 'VICTOR GLOVER',
                    position: "PILOT",
                    img: victor,
                    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
                },
                {
                    name: 'ANOUSHEH ANSARI',
                    img: anousheh,
                    position: "FLIGHT ENGINEER",
                    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
                },
            ],
            technology: [
                {
                    number: 'one',
                    title: "LAUNCH VEHICLE",
                    img: launch,
                    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                },
                {
                    number: 'two',
                    title: "SPACEPORT",
                    img: spaceport,
                    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                },
                {
                    number: 'three',
                    title: "SPACE CAPSULE",
                    img: capsule,
                    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                },
            ]
        }
    ]
export default data;