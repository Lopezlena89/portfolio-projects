import Link from 'next/link'



export const Footer = () => {
  return (
   <>
    <Link href={"mailto:luismllv89@gmail.com"}>
        <h3 className={` text-sm font-light text-gray-600 dark:text-zinc-400`} >Luis Mariano Lopez Lena Valdivieso <span className="opacity-0 sm:opacity-100">-</span> Developer</h3>
    </Link>
    <Link href='/projects'>
        <span className={`text-sm font-light text-gray-600 dark:text-zinc-400`} >Portfolio </span>
        <span className={` text-sm font-light text-gray-600 dark:text-zinc-400`} > © { new Date().getFullYear() }</span>
    </Link>
   </>
  )
}
