// components/ViewProperties.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreVertical } from 'lucide-react'

interface Property {
  id: string
  name: string
  location: string
  size: string
  propertyType: string
  rent: number
  furnishingStatus: string
  image: string
}

const dummyProperties: Property[] = [
  {
    id: '1',
    name: 'Edappally Flat',
    location: 'Edappally',
    size: '2 BHK',
    propertyType: 'Flat',
    rent: 12000,
    furnishingStatus: 'Furnished',
    image: 'https://via.placeholder.com/150x100?text=Flat+1',
  },
  {
    id: '2',
    name: 'Vytilla House',
    location: 'Vytilla',
    size: '3 BHK',
    propertyType: 'House',
    rent: 18000,
    furnishingStatus: 'Semi-furnished',
    image: 'https://via.placeholder.com/150x100?text=House+1',
  },
  {
    id: '3',
    name: 'MG Road PG',
    location: 'MG Road',
    size: '1 RK',
    propertyType: 'PG',
    rent: 6000,
    furnishingStatus: 'Unfurnished',
    image: 'https://via.placeholder.com/150x100?text=PG+1',
  },
]

export default function ViewProperties() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')

  const filteredProperties = dummyProperties
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sort === 'asc' ? a.rent - b.rent : b.rent - a.rent))

  return (
    <div className='p-6 space-y-6'>
      {/* Top Bar */}
      <div className='flex justify-between items-center mb-4'>
        <Input
          placeholder='Search properties...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='max-w-xs'
        />
        <select
          className='border rounded px-3 py-1'
          value={sort}
          onChange={(e) => setSort(e.target.value as 'asc' | 'desc')}
        >
          <option value='asc'>Rent: Low to High</option>
          <option value='desc'>Rent: High to Low</option>
        </select>
      </div>

      {/* Properties Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto border border-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-2 text-left'>Image</th>
              <th className='px-4 py-2 text-left'>Property Name</th>
              <th className='px-4 py-2 text-left'>Details</th>
              <th className='px-4 py-2 text-left'>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProperties.map((property) => (
              <tr key={property.id} className='border-t'>
                <td className='px-4 py-2'>
                  <img
                    src={property.image}
                    alt={property.name}
                    className='w-32 h-20 object-cover rounded'
                  />
                </td>
                <td className='px-4 py-2 font-semibold'>{property.name}</td>
                <td className='px-4 py-2 space-y-1'>
                  <p>
                    <strong>Location:</strong> {property.location}
                  </p>
                  <p>
                    <strong>Size:</strong> {property.size}
                  </p>
                  <p>
                    <strong>Type:</strong> {property.propertyType}
                  </p>
                  <p>
                    <strong>Rent:</strong> ₹{property.rent}
                  </p>
                  <p>
                    <strong>Furnishing:</strong> {property.furnishingStatus}
                  </p>
                </td>
                <td className='px-4 py-2'>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='outline' size='sm'>
                        <MoreVertical size={20} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Block</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
