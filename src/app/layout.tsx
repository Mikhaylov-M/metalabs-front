import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import Header from '../global/components/Header/Header'
import Footer from '@/global/components/Footer/Footer'

import '../global/styles/_reset.scss'
import '../global/styles/globals.scss'
import '../global/styles/media.scss'

const raleway = Raleway({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="ru">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}