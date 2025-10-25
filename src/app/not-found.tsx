'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-center px-4'>
      <h1 className='text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500'>
        404
      </h1>
      <p className='text-2xl text-gray-800 font-semibold mt-4'>
        Page Not Found
      </p>
      <p className='text-gray-600 mt-2 max-w-md'>
        We can’t seem to find the page you’re looking for. Try going back to the
        homepage.
      </p>
      <div className='mt-6'>
        <Button asChild>
          <Link href='/'>🏠 Go Home</Link>
        </Button>
      </div>
      <img
        src='https://illustrations.popsy.co/gray/404-error.svg'
        alt='404 illustration'
        className='w-80 mt-10 opacity-80'
      />
    </div>
  )
}
