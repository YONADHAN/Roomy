'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Building2,
  MapPin,
  ClipboardList,
  MessageSquare,
  User,
  Menu,
  X,
  Settings,
  LogOut,
  Soup,
} from 'lucide-react'

export default function AdminNavbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const navItems = [
    {
      name: 'Bookings',
      href: '/admin/dashboard/bookings',
      icon: <ClipboardList size={18} />,
    },
    {
      name: 'Properties',
      href: '/admin/dashboard/properties',
      icon: <Building2 size={18} />,
    },
    {
      name: 'Locations',
      href: '/admin/dashboard/locations',
      icon: <MapPin size={18} />,
    },
    { name: 'Mess', href: '/admin/dashboard/mess', icon: <Soup size={18} /> },
    {
      name: 'Contact',
      href: '/admin/dashboard/contact',
      icon: <MessageSquare size={18} />,
    },
  ]

  return (
    <header className='bg-white shadow-sm border-b border-gray-200 relative z-50'>
      <div className='flex justify-between items-center px-4 sm:px-6 py-4'>
        {/* Left: Logo / Dashboard */}
        <Link href='/admin/dashboard' className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-gradient-to-tr from-indigo-600 to-blue-500 rounded-md flex items-center justify-center'>
            <LayoutDashboard className='text-white' size={18} />
          </div>
          <span className='text-xl font-semibold text-gray-900'>Dashboard</span>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-6'>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-2 text-sm transition ${
                pathname === item.href
                  ? 'text-blue-600 font-medium'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          {/* Profile Dropdown */}
          <div className='relative'>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition'
            >
              <User size={20} />
              <span className='text-sm'>Profile</span>
            </button>

            {profileOpen && (
              <div className='absolute right-0 mt-3 bg-white shadow-lg rounded-md border border-gray-100 w-40 py-2 z-50'>
                <Link
                  href='/admin/settings'
                  className='flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm'
                >
                  <Settings size={16} /> Settings
                </Link>
                <button
                  onClick={() => alert('Logging out...')}
                  className='flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 text-sm'
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden p-2 text-gray-700 hover:text-blue-600'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white shadow-md border-t border-gray-100 py-4'>
          <nav className='flex flex-col items-center gap-4 px-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 w-full max-w-xs justify-center py-2 rounded-lg transition ${
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
              href='/admin/settings'
              onClick={() => setMenuOpen(false)}
              className='flex items-center justify-center gap-2 text-gray-700 hover:text-blue-600 transition py-2 text-sm'
            >
              <Settings size={16} /> Settings
            </Link>
            <button
              onClick={() => {
                setMenuOpen(false)
                alert('Logging out...')
              }}
              className='flex items-center justify-center gap-2 text-gray-700 hover:text-red-600 transition py-2 text-sm'
            >
              <LogOut size={16} /> Logout
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
