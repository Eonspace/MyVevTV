import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const popins = Poppins({ weight:['100','200','300','400','500','600','700','800','900'],subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'MyVevTV',
  description: 'Watch your favorite tv shows',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  )
}
