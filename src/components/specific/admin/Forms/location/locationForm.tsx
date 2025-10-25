// components/LocationForm.tsx
'use client'

import React from 'react'

export default function LocationForm() {
  return (
    <form className='max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-800'>Add New Location</h2>

      {/* Location Name */}
      <div>
        <label className='block'>
          <span className='text-gray-700'>Location Name</span>
          <input
            type='text'
            name='name'
            placeholder='Edappally'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
          />
        </label>
      </div>

      {/* Slug */}
      <div>
        <label className='block'>
          <span className='text-gray-700'>Slug (optional)</span>
          <input
            type='text'
            name='slug'
            placeholder='edappally'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
          />
          <small className='text-gray-400'>
            Leave empty to auto-generate from name
          </small>
        </label>
      </div>

      {/* City */}
      <div>
        <label className='block'>
          <span className='text-gray-700'>City</span>
          <input
            type='text'
            name='city'
            placeholder='Kochi'
            defaultValue='Kochi'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
          />
        </label>
      </div>

      {/* Description */}
      <div>
        <label className='block'>
          <span className='text-gray-700'>Description</span>
          <textarea
            name='description'
            placeholder='Brief info about this location'
            rows={4}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
          />
        </label>
      </div>

      {/* Image URL */}
      <div>
        <label className='block'>
          <span className='text-gray-700'>Image URL</span>
          <input
            type='url'
            name='image'
            placeholder='https://example.com/banner.jpg'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
          />
        </label>
      </div>

      {/* Property Count */}
      <div>
        <label className='block'>
          <span className='text-gray-700'>Property Count</span>
          <input
            type='number'
            name='propertyCount'
            placeholder='0'
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
          />
          <small className='text-gray-400'>
            Optional: Can be updated later automatically
          </small>
        </label>
      </div>

      <div className='pt-4'>
        <button
          type='submit'
          className='w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
        >
          Add Location
        </button>
      </div>
    </form>
  )
}
