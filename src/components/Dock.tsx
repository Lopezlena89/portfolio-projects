'use client'

import { scaleValue } from "../utils/dock-util";
import {  useEffect, useRef } from "react";
import { IoHomeSharp,IoMail,IoLogoGithub,IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";
import { darkMode } from "./darkMode";



const maxAdditionalSize = 5;

export const Dock = () => {
  
  
    useEffect(() => {
      !localStorage.theme && localStorage.setItem('theme','light')

      if(localStorage.theme === 'dark'){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.add('light')
      }
    }, [])
    
  

  const dockRef = useRef<HTMLDivElement>(null);

  const handleAppHover = (ev: React.MouseEvent<HTMLLIElement>) => {
    if (!dockRef.current) return;

    const mousePosition = ev.clientX;
    const iconPositionLeft = ev.currentTarget.getBoundingClientRect().left;
    const iconWidth = ev.currentTarget.getBoundingClientRect().width;

    const cursorDistance = (mousePosition - iconPositionLeft) / iconWidth;
    const offsetPixels = scaleValue(
      cursorDistance,
      [0, 1],
      [maxAdditionalSize * -1, maxAdditionalSize]
    );

    dockRef.current.style.setProperty(
      "--dock-offset-left",
      `${offsetPixels * -1}px`
    );

    dockRef.current.style.setProperty(
      "--dock-offset-right",
      `${offsetPixels}px`
    );
  };
  
  return (
    <div className="page fixed bottom-10 w-[90%] text-sm sm:w-[70%] md:w-auto">
    <nav ref={dockRef} className="dock bg-white dark:bg-zinc-900 mb-8  md:mb-5">
      <ul >
        <li className="app" onMouseMove={handleAppHover}>
          <Link 
            href="/" 
            className="h-[60%] w-[70%] sm:h-[70%] sm:w-[70%] text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600"  
          >
            <IoHomeSharp size={30} />
            <span className="tooltip bg-white dark:bg-zinc-900">Home</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link 
            href="/projects" 
            className="h-[60%] w-[70%] sm:h-[70%] sm:w-[70%]  text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600"  
          >
            <HiOutlineLightBulb size={30}/>
            <span className="tooltip bg-white dark:bg-zinc-900">Projects</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link 
            href="https://twitter.com/Luismllv89" 
            className="h-[60%] w-[70%] sm:h-[70%] sm:w-[70%]  text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600" 
            target="_blank" 
          >
            <FaTwitter size={30}/>
            <span className="tooltip bg-white dark:bg-zinc-900">Twitter</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link 
            href="https://github.com/Lopezlena89" 
            className="h-[60%] w-[70%] sm:h-[70%] sm:w-[70%]  text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600" 
            target="_blank"  
          >
            <IoLogoGithub size={30}/>
            <span className="tooltip bg-white dark:bg-zinc-900">Github </span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link 
            href="https://www.linkedin.com/in/luis-mariano-lopez-lena-valdivieso-a514073a/" 
            className="h-[60%] w-[70%] sm:h-[70%] sm:w-[70%]  text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600" 
            target="_blank"  
          >
           <IoLogoLinkedin size={30}/>
            <span className="tooltip bg-white dark:bg-zinc-900">Linkedin</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link 
            href="mailto:luismllv89@gmail.com" 
            className="h-[60%] w-[70%] sm:h-[70%] sm:w-[70%]  text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600"  
            target="_blank" 
          >
            <IoMail size={30}/>
            <span className="tooltip bg-white dark:bg-zinc-900">Contact me</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <button  
           onClick={darkMode}
            className="h-[60%] w-[70%] sm:h-[70%] sm:w-[70%]  text-zinc-400 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-600"   
          >
           <MdDarkMode size={30}/>
            <span className="tooltip bg-white dark:bg-zinc-900">Toogle theme</span>
          </button>
        </li>
       
      </ul>
    </nav>

    </div>
);
}
  

