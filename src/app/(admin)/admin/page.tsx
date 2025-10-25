'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    setLoading(true)

    try {
      // 🔹 Dummy authentication for demo
      if (email === 'admin@roomynest.com' && password === 'admin123') {
        router.push('/admin/dashboard')
      } else {
        setError('Invalid credentials. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4'>
      <div className='w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border border-gray-100'>
        <div className='text-center mb-8'>
          <div className='mx-auto mb-3 w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center'>
            <LogIn className='text-white' size={24} />
          </div>
          <h1 className='text-2xl font-bold text-gray-900'>Admin Login</h1>
          <p className='text-gray-500 text-sm mt-1'>
            Sign in to manage your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              type='email'
              placeholder='admin@roomynest.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='mt-1'
            />
          </div>

          <div>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              placeholder='••••••••'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='mt-1'
            />
          </div>

          {error && <p className='text-red-500 text-sm text-center'>{error}</p>}

          <Button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5'
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Login'}
          </Button>
        </form>

        <p className='text-center text-xs text-gray-500 mt-6'>
          © {new Date().getFullYear()} RoomyNest Admin Portal
        </p>
      </div>
    </div>
  )
}
