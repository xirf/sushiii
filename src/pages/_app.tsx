import '-/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'

import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--poppins',
    weight: ['100']
})

const rocko = localFont({
    src: '../fonts/RockoUltraFLF.ttf',
    variable: '--rocko'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={`${rocko.variable} ${poppins.variable}`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}
