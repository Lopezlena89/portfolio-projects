'use client'

import { scaleValue } from "../utils/dock-util";
import {  useRef } from "react";
import { IoHomeSharp,IoMail,IoLogoGithub,IoLogoLinkedin } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";

const maxAdditionalSize = 5;

export const Dock = () => {

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
    <div className="page">
    <nav ref={dockRef} className="dock">
      <ul>
        <li className="app" onMouseMove={handleAppHover}>
          <Link href="/" >
            <IoHomeSharp size={30}/>
            <span className="tooltip">Home</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link href="/" >
            <HiOutlineLightBulb size={30}/>
            <span className="tooltip">Projects</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link href="/" >
            <FaTwitter size={30}/>
            <span className="tooltip">Twitter</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link href="/" >
            <IoLogoGithub size={30}/>
            <span className="tooltip">Github </span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link href="/" >
           <IoLogoLinkedin size={30}/>
            <span className="tooltip">Linkedin</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link href="/" >
            <IoMail size={30}/>
            <span className="tooltip">Email</span>
          </Link>
        </li>
        <li className="app" onMouseMove={handleAppHover}>
          <Link href="/" >
           <MdDarkMode size={30}/>
            <span className="tooltip">Toogle theme</span>
          </Link>
        </li>
       
      </ul>
    </nav>

    </div>
);
}
  

