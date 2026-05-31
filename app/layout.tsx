import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AURALUK — Luxury Dark-Sky Retreat · Sutton, Québec',
  description:
    'An intimate observatory retreat hidden in the mountains near Sutton, Québec. Guided telescope nights, aurora vigils, Nordic chalets. Where the northern sky becomes an experience.',
  keywords: ['luxury retreat', 'dark sky', 'astronomy', 'aurora', 'Sutton Quebec', 'observatory'],
  openGraph: {
    title: 'AURALUK — Where the Northern Sky Becomes an Experience',
    description:
      'A luxury astronomy retreat hidden in the mountains of Sutton, Québec. Stillness, wonder, and the infinite above.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${cormorant.variable} ${inter.variable} bg-void text-silver antialiased`}>
        {/* Subtle film-grain overlay across the entire site */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none z-[9999]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            opacity: 0.028,
            mixBlendMode: 'overlay',
          }}
        />
        {children}
      </body>
    </html>
  )
}
