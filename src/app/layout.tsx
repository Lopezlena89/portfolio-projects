import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css'

import { Providers } from '@/components/providers/Providers';


export const metadata: Metadata = {
  title: 'Profile',
  description: 'Portfolio about my experience',
  keywords:["portfolio","lumava","web developer"],
  authors:[{ name: "Luis Mariano Lopez Lena Valdivieso", url: "https://lumava.dev" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="en" className=' bg-gray-100 dark:bg-zinc-900' >
      <body className={`${GeistSans.className}  bg-gray-100  dark:bg-zinc-900`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
