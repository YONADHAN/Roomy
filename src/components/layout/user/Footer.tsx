'use client'

import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='bg-slate-900 text-white py-10'>
      <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8'>
        {/* Left Section */}
        <div>
          <div className='flex items-center mb-3'>
            <svg
              className='w-7 h-7 mr-2 text-blue-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-5-4h1m-1 4h1'
              />
            </svg>
            <h3 className='text-xl font-semibold'>
              <span className='text-blue-400'>Roomy</span>Nest
            </h3>
          </div>
          <p className='text-sm text-gray-300 max-w-xs leading-relaxed'>
            A modern platform designed exclusively for bachelors seeking
            hassle-free and affordable rooms across India.
          </p>
          <div className='mt-3 text-sm text-gray-400 space-y-1'>
            <p>
              Email:{' '}
              <a
                href='mailto:hello@roomynest.in'
                className='text-blue-400 hover:underline'
              >
                hello@roomynest.in
              </a>
            </p>
            <p>
              Phone:{' '}
              <a
                href='tel:+918891218045'
                className='text-blue-400 hover:underline'
              >
                +91 88912 18045
              </a>
            </p>
            <p>Address: Kochi, Kerala, India - 682017</p>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex flex-col sm:flex-row gap-10 text-sm'>
          <div>
            <h4 className='font-semibold text-white mb-2'>Company</h4>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='text-gray-400 hover:text-blue-400'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-blue-400'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-white mb-2'>Services</h4>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='text-gray-400 hover:text-blue-400'>
                  For House Owners
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-blue-400'>
                  Find Your Room
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-blue-400'>
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-white mb-2'>Legal</h4>
            <ul className='space-y-1'>
              <li>
                <a href='#' className='text-gray-400 hover:text-blue-400'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-slate-700 mt-8 pt-4'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400'>
          <p>© 2025 RoomyNest. All rights reserved.</p>

          {/* Social Icons */}
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-blue-400 transition-colors'>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M22.46 6c-.77.35-1.6.58-2.46.69a4.17 4.17 0 001.84-2.3 8.2 8.2 0 01-2.6 1 4.13 4.13 0 00-7.04 3.76A11.7 11.7 0 013 4.89a4.12 4.12 0 001.28 5.51A4.1 4.1 0 012.8 9.9v.05a4.13 4.13 0 003.31 4.05 4.16 4.16 0 01-1.85.07 4.14 4.14 0 003.86 2.87A8.29 8.29 0 012 19.54a11.65 11.65 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.3 8.3 0 0022.46 6z' />
              </svg>
            </a>
            <a href='#' className='hover:text-blue-400 transition-colors'>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12 2.2c3.19 0 3.568.012 4.827.07 3.252.148 4.77 1.616 4.917 4.917.059 1.26.071 1.639.071 4.827 0 3.188-.012 3.568-.071 4.827-.147 3.252-1.665 4.77-4.917 4.917-1.259.059-1.637.071-4.827.071-3.19 0-3.568-.012-4.827-.071-3.252-.147-4.77-1.665-4.917-4.917C2.2 15.615 2.188 15.237 2.188 12.048c0-3.19.012-3.568.071-4.827C2.406 3.97 3.924 2.453 7.176 2.305 8.435 2.247 8.814 2.235 12 2.235zm0-2.2C8.74 0 8.329.013 7.052.072 2.69.273.273 2.69.072 7.052.013 8.33 0 8.741 0 12s.013 3.67.072 4.948c.201 4.362 2.618 6.779 6.98 6.98C8.33 23.987 8.74 24 12 24s3.67-.013 4.948-.072c4.362-.201 6.779-2.618 6.98-6.98C23.987 15.67 24 15.259 24 12s-.013-3.67-.072-4.948c-.201-4.362-2.618-6.779-6.98-6.98C15.67.013 15.259 0 12 0z' />
                <path d='M12 5.838A6.162 6.162 0 105.838 12 6.162 6.162 0 0012 5.838m0-2.162a8.324 8.324 0 11-8.324 8.324A8.324 8.324 0 0112 3.676z' />
                <circle cx='18.406' cy='5.594' r='1.44' />
              </svg>
            </a>
            <a href='#' className='hover:text-blue-400 transition-colors'>
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h11.02v-8.28H9.69v-3.23h3.1V9.41c0-3.07 1.88-4.74 4.62-4.74 1.32 0 2.45.1 2.78.14v3.23h-1.9c-1.49 0-1.78.71-1.78 1.75v2.3h3.55l-.46 3.23h-3.09V24h6.05A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
