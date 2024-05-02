import { Nunito_Sans } from 'next/font/google'

export const Nunito = Nunito_Sans({
  weight: ['300', '600', '800'],
  display: 'swap',
  subsets: ['latin'],
  fallback: ['system-ui', 'arial']
})
