import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--roboto-font',
 })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.variable}>
      <Component {...pageProps} />
    </main>
  )
}
