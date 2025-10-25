'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function LocationView() {
  const locations = [
    { name: 'Edappally', slug: 'edappally', city: 'Kochi', propertyCount: 12 },
    { name: 'Vytilla', slug: 'vytilla', city: 'Kochi', propertyCount: 8 },
    {
      name: 'Palarivattom',
      slug: 'palarivattom',
      city: 'Kochi',
      propertyCount: 5,
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-800'>Locations</h2>

      {/* Top Controls */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <input
          type='text'
          placeholder='Search locations...'
          className='px-4 py-2 border rounded-md w-full md:w-1/3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'
        />
        <select className='px-4 py-2 border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200'>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Latest - Oldest</option>
          <option>Oldest - Latest</option>
          <option>Property Count Ascending</option>
          <option>Property Count Descending</option>
        </select>
      </div>

      {/* Locations Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Slug
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                City
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Property Count
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Action
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {locations.map((location, idx) => (
              <tr key={idx} className='hover:bg-gray-50'>
                <td className='px-6 py-4 whitespace-nowrap'>{location.name}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{location.slug}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{location.city}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {location.propertyCount}
                </td>
                <td className='px-6 py-4 whitespace-nowrap relative'>
                  <button
                    onClick={() => toggleDropdown(idx)}
                    className='inline-flex justify-center px-3 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400'
                  >
                    Action <ChevronDown className='ml-2 w-4 h-4' />
                  </button>

                  {openIndex === idx && (
                    <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Edit
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                      >
                        Delete
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      >
                        Block
                      </a>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
