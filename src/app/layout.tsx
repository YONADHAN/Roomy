// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/layout/user/ClientLayout'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'RoomyNest | Find Your Perfect Mess',
  description:
    'Discover comfortable and affordable mess options near you — powered by RoomyNest.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Client-side route-aware layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
