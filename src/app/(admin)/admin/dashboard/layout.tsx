// app/layout.tsx

import type { Metadata } from 'next'
import AdminNavbar from '@/components/layout/admin/Navbar'
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
    <section lang='en' className='min-h-screen flex flex-col'>
      {/* Navbar (Fixed at top) */}
      <AdminNavbar />
      {/* Main Page Content */}
      <main>{children}</main>

      {/* Footer */}
    </section>
  )
}
