import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import LogoTitle from '../../images/letter_E.png'
import AnimatedLetters from '../AnimateLetters'
import './index.scss'

import Loader from 'react-loaders'
import Logo from './Logo'
import './index.scss'
const Home = () =>{
    const [letterClass,setletterClass] = useState('text-animate')
    // const welcomeArray = ['W','E','L','C','O','M','E','!']
    const nameArray = ['E','r','i','c','k',' ','T','e','p','a','n']
    // const jobArray = ['C','o','m','p','u','t','e','r',' ','S','c','i','e','n','c','e',' ','M','a','j','o','r']
    const jobArray = ['C','o','m','p','u','t','e','r',' ','S','c','i','e','n','c','e']

    useEffect(()=>{
        return setTimeout(() => {
        setletterClass('text-animate-hover')
        },4000)
    },[]
    )
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className='welcName'>
                    W e l c o m e !
                    </span>
                    <br /> 
                    <br/>
                    I'm {" "}
                    {/* <span className={letterClass}>I</span>
                    <span className={`${letterClass} _14`}>'m,</span> {' '} */}
                    {/* <img src={LogoTitle} alt ="developer"/>    */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    ,
                    <br/>
                    a student at Lehigh University studying
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}/>
                    <br/> 
                </h1>
                <h2>
                Frontend developer / JavaScript Expert
                </h2>
                <Link to="/contact" className='flat-button'>
                    Contact Me
                </Link>
            </div>
            <Logo />
            <Loader type="pacman" />
        </div>
    )


}
export default Home