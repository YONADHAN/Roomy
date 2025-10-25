'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/layout/user/Navbar'
import Footer from '@/components/layout/user/Footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith('/admin')

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <main>{children}</main>
      {!isAdminRoute && <Footer />}
    </>
  )
}
