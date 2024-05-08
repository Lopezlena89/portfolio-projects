import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';

import './globals.css'

import { Providers } from '@/components/providers/Providers';


export const metadata: Metadata = {
  title: 'Profile',
  description: 'Portfolio about my experience',
  generator: 'Next.js',
  keywords:["portfolio","lumava","web developer"],
  authors:[{ name: "Luis Mariano Lopez Lena Valdivieso", url: "https://lumava.dev" }],
  category:'Web services',
  metadataBase:new URL("https://lumava.dev"),
  alternates:{
    canonical: '/',
    languages: {
      'es-MX': '/es-MX',
    },
  },
  openGraph: {
    title: 'Luis Mariano Lopez Lena Valdivieso',
    description: 'Portfolio about my experience',
    url: 'https://lumava.dev',
    siteName: 'Luis Mariano Lopez Lena Valdivieso',
    images: [
      {
        url: '/LOGO-03.webp', // Must be an absolute URL
        width: 800,
        height: 600,
        alt:"Lumava Agency"
      },
      
    ],
    locale: 'es_MX',
    type: 'website'
  }

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
