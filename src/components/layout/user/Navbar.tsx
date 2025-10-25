'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Home, Building2, Info, Phone, Search, Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Find Your Room', href: '/find', icon: <Building2 size={18} /> },
    { name: 'About', href: '/about', icon: <Info size={18} /> },
    { name: 'Contact', href: '/contact', icon: <Phone size={18} /> },
  ]

  return (
    <header className='bg-[#f9fbff] shadow-sm relative z-50'>
      <div className='py-4 px-4 sm:px-6 flex items-center justify-between'>
        {/* Logo + Brand */}
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-md flex items-center justify-center'>
            <Building2 className='text-white' size={18} />
          </div>
          <Link
            href='/'
            className='text-xl sm:text-2xl font-bold text-gray-900'
          >
            Roomy<span className='text-blue-600'>Nest</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden lg:flex items-center gap-6 xl:gap-8'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 text-[15px] transition ${
                pathname === item.href
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className='hidden lg:flex items-center gap-3 xl:gap-4'>
          <Link
            href='/explore'
            className='border border-gray-200 rounded-full px-4 xl:px-5 py-2 flex items-center gap-2 text-sm xl:text-base text-gray-900 hover:border-blue-500 transition'
          >
            <Search size={18} />{' '}
            <span className='hidden xl:inline'>Explore Rooms</span>
            <span className='xl:hidden'>Explore</span>
          </Link>
          <Link
            href='/owners'
            className='bg-blue-600 text-white font-semibold rounded-full px-4 xl:px-5 py-2 text-sm xl:text-base hover:bg-blue-700 transition whitespace-nowrap'
          >
            For Owners
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden p-2 text-gray-700 hover:text-blue-600 transition'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle menu'
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='lg:hidden bg-white shadow-md border-t border-gray-100 py-4'>
          <nav className='flex flex-col items-center gap-4 px-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 text-[16px] w-full max-w-xs justify-center py-2 rounded-lg transition ${
                  pathname === item.href
                    ? 'text-blue-600 font-medium bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
            <div className='w-full max-w-xs border-t border-gray-200 my-2'></div>
            <Link
              href='/explore'
              onClick={() => setIsOpen(false)}
              className='border border-gray-200 rounded-full px-5 py-2.5 flex items-center justify-center gap-2 text-gray-900 hover:border-blue-500 transition w-full max-w-xs'
            >
              <Search size={18} /> Explore Rooms
            </Link>
            <Link
              href='/owners'
              onClick={() => setIsOpen(false)}
              className='bg-blue-600 text-white font-semibold rounded-full px-5 py-2.5 hover:bg-blue-700 transition w-full max-w-xs text-center'
            >
              For Room Owners
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
