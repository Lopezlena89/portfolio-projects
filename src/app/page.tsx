import Image from 'next/image'
import { Dock } from './components/Dock'



export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <div className='bg-white w-full h-4/5'>
        
      </div>
      <Dock/>
    </div>
  )
}
