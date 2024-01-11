'use client'

import { PhraseMain } from "@/components/PhraseMain";
import { data } from "@/utils/data-phrases";
import { random } from "colors";
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Home() {

  const [number, setNumber] = useState({});

  useEffect(() => {
    function random(min:number, max:number) {
      return min + Math.random() * (max - min);
    }
    setNumber(Math.floor(random(0,11)))
  }, [])
  

  return (
    <>
        <div className="w-full h-screen flex flex-col bg-gray-100  dark:bg-zinc-900 overflow-auto">
          <div className="w-full h-20">
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-4/6 h-2/5">
                <div className="flex justify-center items-center relative">
                  <h1 className="font-semibold text-2xl absolute dark:text-zinc-100">Welcome</h1>
                </div>
               {
                data.map((data,index) =>(
                  index === number &&
                  <PhraseMain key={index} phrase={data.phrase} author={data.author}/>
                ))
               }
            </div>
          </div>
          <div className="w-full h-20 px-5 flex justify-between items-center">
            <Link href={"mailto:luismllv89@gmail.com"}>
              <h3 className="text-sm font-light text-gray-600 dark:text-zinc-400" >Luis Mariano Lopez Lena Valdivieso <span className="opacity-0 sm:opacity-100">-</span> Developer</h3>
            </Link>
            <Link href='/projects'>
                <span className="text-sm font-light text-gray-600 dark:text-zinc-400" >Portfolio </span>
                <span className="text-sm font-light text-gray-600 dark:text-zinc-400" > © { new Date().getFullYear() }</span>
            </Link>
          </div>

        </div>
    </>
  )
}
