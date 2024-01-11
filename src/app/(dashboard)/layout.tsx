
import { Dock } from '@/components/Dock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Portfolio about my experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center  '>
            {children}
        <Dock/>
    </div>
 
  )
}
