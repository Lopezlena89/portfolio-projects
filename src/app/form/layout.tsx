

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formulario',
  description: 'Portfolio about my experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <div className='layform w-screen h-screen flex flex-col items-center  '>
            {children}
    </div>
 
  )
}
