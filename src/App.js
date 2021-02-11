import React from 'react'
import Dropdown from './components/Dropdown';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { sliderData } from './data/sliderData';
import {GlobalStyle} from './globalStyles'
import {useState} from 'react'
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
function App() {
 const [isOpen,setIsOpen]=useState(false)
 const toggle = ()=>{
    setIsOpen(!isOpen)
 }
  return (<>
    <GlobalStyle/>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle} />
     <Hero slide={sliderData}/>
     <InfoSection {...InfoData} />
    </>
  );
}

export default App;
