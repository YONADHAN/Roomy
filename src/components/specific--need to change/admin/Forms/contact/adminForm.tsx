// components/AdminForm.tsx
'use client'

import React, { useState } from 'react'

export default function AdminForm() {
  const [socialLinks, setSocialLinks] = useState([{ platform: '', url: '' }])

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: '', url: '' }])
  }

  const removeSocialLink = (index) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index))
  }

  const updateSocialLink = (index, field, value) => {
    const updated = [...socialLinks]
    updated[index][field] = value
    setSocialLinks(updated)
  }

  return (
    <form className='max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-800'>Admin Details</h2>

      {/* Personal Info */}
      <div className='space-y-4'>
        <h3 className='text-lg font-medium text-gray-800'>Personal Info</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <label className='block'>
            <span className='text-gray-700'>Full Name</span>
            <input
              type='text'
              name='name'
              placeholder='John Doe'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>

          <label className='block'>
            <span className='text-gray-700'>Personal Email</span>
            <input
              type='email'
              name='personalEmail'
              placeholder='admin@example.com'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>

          <label className='block md:col-span-2'>
            <span className='text-gray-700'>Password</span>
            <input
              type='password'
              name='password'
              placeholder='••••••••'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>
        </div>
      </div>

      {/* Business Contact Info */}
      <div className='space-y-4'>
        <h3 className='text-lg font-medium text-gray-800'>
          Business Contact Info
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <label className='block'>
            <span className='text-gray-700'>Business Emails</span>
            <input
              type='text'
              name='businessEmails'
              placeholder='email1@example.com, email2@example.com'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>

          <label className='block'>
            <span className='text-gray-700'>Phone Numbers</span>
            <input
              type='text'
              name='phoneNumbers'
              placeholder='+1234567890, +0987654321'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>

          <label className='block'>
            <span className='text-gray-700'>WhatsApp Number</span>
            <input
              type='text'
              name='whatsappNumber'
              placeholder='+1234567890'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>

          <label className='block'>
            <span className='text-gray-700'>Map Link</span>
            <input
              type='url'
              name='mapLink'
              placeholder='https://maps.google.com/...'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>

          <label className='block md:col-span-2'>
            <span className='text-gray-700'>Address</span>
            <input
              type='text'
              name='address'
              placeholder='123 Street, City, Country'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>
        </div>
      </div>

      {/* Social Links */}
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-medium text-gray-800'>Social Links</h3>
          <button
            type='button'
            onClick={addSocialLink}
            className='px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
          >
            + Add Link
          </button>
        </div>

        <div className='space-y-3'>
          {socialLinks.map((link, index) => (
            <div
              key={index}
              className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'
            >
              <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-3'>
                <input
                  type='text'
                  value={link.platform}
                  onChange={(e) =>
                    updateSocialLink(index, 'platform', e.target.value)
                  }
                  placeholder='Platform (e.g., Facebook)'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
                />
                <input
                  type='url'
                  value={link.url}
                  onChange={(e) =>
                    updateSocialLink(index, 'url', e.target.value)
                  }
                  placeholder='https://facebook.com/...'
                  className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
                />
              </div>
              {socialLinks.length > 1 && (
                <button
                  type='button'
                  onClick={() => removeSocialLink(index)}
                  className='px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 focus:outline-none'
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* App Info */}
      <div className='space-y-4'>
        <h3 className='text-lg font-medium text-gray-800'>App Info</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <label className='block'>
            <span className='text-gray-700'>App Name</span>
            <input
              type='text'
              name='appName'
              placeholder='MyApp'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>

          <label className='block'>
            <span className='text-gray-700'>App Link</span>
            <input
              type='url'
              name='appLink'
              placeholder='https://myapp.com'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
            />
          </label>
        </div>
      </div>

      <div className='pt-4'>
        <button
          type='submit'
          className='w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
        >
          Save Admin
        </button>
      </div>
    </form>
  )
}
