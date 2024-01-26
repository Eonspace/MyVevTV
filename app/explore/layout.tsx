import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'

const popins = Poppins({ weight:['100','200','300','400','500','600','700','800','900'],subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Explore',
  description: 'Explore New Dramas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <section>
    {children}
   </section>
  )
}
