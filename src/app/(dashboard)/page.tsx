'use client'

import { Footer } from "@/components/Footer";
import { PhraseMain } from "@/components/PhraseMain";
import { data } from "@/utils/data-phrases";

import { useEffect, useState } from 'react';


export default function Home() {

  const [number, setNumber] = useState({});

  useEffect(() => {
    function random(min:number, max:number) {
      return min + Math.random() * (max - min);
    }
    setNumber(Math.floor(random(0,13)))
  }, [])
  

  return (
    <>
        <div className="w-full h-screen flex flex-col bg-gray-100  dark:bg-zinc-900 overflow-auto">
          <div className="w-full h-20">
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-4/6 h-2/5">
                <div className="flex justify-center items-center relative">
                  <h1 className="font-semibold text-2xl absolute dark:text-zinc-100 mb-10">Welcome</h1>
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
            <Footer/>
          </div>

        </div>
    </>
  )
}
