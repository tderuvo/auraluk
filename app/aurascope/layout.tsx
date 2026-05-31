import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The AuraScope — Observatory Instrument · AURALUK',
  description:
    'A custom-built 16-inch observatory instrument at the heart of AURALUK. Handcrafted carbon-steel, parabolic mirror ground to λ/10, designed for the northern Quebec sky.',
}

export default function AuraScopeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
