import Image from "next/image";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function Page() {
  return (
    <div className="h-screen w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-auto  bg-gray-100  dark:bg-zinc-900">
      {/* Objeto 1 */}
      <div className="w-full h-full p-1 rounded-lg flex flex-col ">
        <div className="w-full h-[350px] p-1  rounded-lg border boder-solid border-zinc-300 dark:border-zinc-700 ">
          <div className="w-full h-[87%] p-1 rounded-lg bg-gray-100 dark:bg-zinc-900">
            <Image
              src={"/meme-shop.png"}
              width={500}
              height={500}
              alt="Meme shop"
              className="rounded-lg dark:bg-zinc-900 w-full h-[100%]"
            />
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://01shopmeme.vercel.app/'}
              className="w-full h-full pt-1 rounded-lg bg-gray-100"
              target="_black"
            >
              <div className="w-full h-full rounded-lg flex justify-center items-center bg-zinc-200  dark:bg-zinc-700 dark:text-zinc-100  ">
                <span className="font-medium">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 dark:text-zinc-100' />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[350px] p-1  rounded-lg border boder-solid border-zinc-300 dark:border-zinc-700 ">
          <div className="w-full h-[87%] p-1 rounded-lg bg-gray-100 dark:bg-zinc-900">
            <Image
              src="/pokemon.png"
              width={500}
              height={500}
              alt="Pokemon list"
              className="rounded-lg dark:bg-zinc-900 w-full h-[100%]"
            />
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://next-pokemon-blond-nu.vercel.app/'}
              className="w-full h-full pt-1 rounded-lg bg-gray-100  "
              target="_black"
            >
              <div className="w-full h-full rounded-lg flex justify-center items-center bg-zinc-200  dark:bg-zinc-700 dark:text-zinc-100  ">
                <span className="font-medium">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 dark:text-zinc-100' />
              </div>
            </Link>
          </div>
        </div>


      </div>
      {/* Objeto 2 */}
      <div className="w-full h-full p-1 rounded-lg flex flex-col ">
        <div className="w-full h-[300px] p-1  rounded-lg border boder-solid border-zinc-300 dark:border-zinc-700 ">
          <div className="w-full h-[87%] p-1 rounded-lg bg-gray-100 dark:bg-zinc-900">
            <Image
              src="/calendar.png"
              width={500}
              height={500}
              alt="Calendar"
              className="rounded-lg dark:bg-zinc-900 w-full h-[100%]"
            />
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://time-weather.vercel.app/'}
              className="w-full h-full pt-1 rounded-lg bg-gray-100  "
              target="_black"
            >
              <div className="w-full h-full rounded-lg flex justify-center items-center bg-zinc-200  dark:bg-zinc-700 dark:text-zinc-100  ">
                <span className="font-medium">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 dark:text-zinc-100' />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[270px] p-1  rounded-lg border boder-solid border-zinc-300 dark:border-zinc-700 ">
          <div className="w-full h-[87%] p-1 rounded-lg bg-gray-100 dark:bg-zinc-900">
            <Image
              src="/todo-app.png"
              width={500}
              height={500}
              alt="Todo App"
              className="rounded-lg dark:bg-zinc-900 w-full h-[100%]"
            />
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://polite-lily-947508.netlify.app/'}
              className="w-full h-full pt-1 rounded-lg bg-gray-100  "
              target="_black"
            >
              <div className="w-full h-full rounded-lg flex justify-center items-center bg-zinc-200  dark:bg-zinc-700 dark:text-zinc-100  ">
                <span className="font-medium">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 dark:text-zinc-100' />
              </div>
            </Link>
          </div>
        </div>
        

      </div>
      {/* Objeto 3 */}
      <div className="w-full h-full p-1 rounded-lg flex flex-col ">
      <div className="w-full h-[350px] p-1  rounded-lg border boder-solid border-zinc-300 dark:border-zinc-700 ">
          <div className="w-full h-[87%] p-1 rounded-lg bg-gray-100 dark:bg-zinc-900">
          <Image
            src="/poker.png"
            width={500}
            height={500}
            alt="Poker"
            className="rounded-lg dark:bg-zinc-900 w-full h-[100%]"
          />
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://dapper-pika-0f9ebf.netlify.app/'}
              className="w-full h-full pt-1 rounded-lg bg-gray-100  "
              target="_black"
            >
              <div className="w-full h-full rounded-lg flex justify-center items-center bg-zinc-200  dark:bg-zinc-700 dark:text-zinc-100  ">
                <span className="font-medium">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 dark:text-zinc-100' />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[350px] p-1  rounded-lg border boder-solid border-zinc-300 dark:border-zinc-700 ">
          <div className="w-full h-[87%] p-1 rounded-lg bg-gray-100 dark:bg-zinc-900">
          <Image
            src="/meme-shop.png"
            width={500}
            height={500}
            alt="Meme shop"
            className="rounded-lg dark:bg-zinc-900 w-full h-[100%]"
          />
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://01shopmeme.vercel.app/'}
              className="w-full h-full pt-1 rounded-lg bg-gray-100  "
              target="_black"
            >
              <div className="w-full h-full rounded-lg flex justify-center items-center bg-zinc-200  dark:bg-zinc-700 dark:text-zinc-100  ">
                <span className="font-medium">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 dark:text-zinc-100' />
              </div>
            </Link>
          </div>
        </div>

      </div>


    </div>
  )
}
