// components/ViewMesses.tsx
'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreVertical } from 'lucide-react'

interface Mess {
  id: string
  messName: string
  monthlyPrice: number
}

const dummyMesses: Mess[] = [
  { id: '1', messName: 'Edappally Mess', monthlyPrice: 4000 },
  { id: '2', messName: 'Vytilla Mess', monthlyPrice: 4500 },
  { id: '3', messName: 'MG Road Mess', monthlyPrice: 4200 },
]

export default function ViewMesses() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')

  const filteredMesses = dummyMesses
    .filter((m) => m.messName.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === 'asc'
        ? a.monthlyPrice - b.monthlyPrice
        : b.monthlyPrice - a.monthlyPrice
    )

  return (
    <div className='p-6 space-y-6'>
      {/* Top Bar */}
      <div className='flex justify-between items-center mb-4'>
        <Input
          placeholder='Search mess...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='max-w-xs'
        />
        <select
          className='border rounded px-3 py-1'
          value={sort}
          onChange={(e) => setSort(e.target.value as 'asc' | 'desc')}
        >
          <option value='asc'>Price: Low to High</option>
          <option value='desc'>Price: High to Low</option>
        </select>
      </div>

      {/* Messes List */}
      <div className='grid gap-4'>
        {filteredMesses.map((mess) => (
          <div
            key={mess.id}
            className='flex justify-between items-center p-4 bg-white rounded shadow'
          >
            <div>
              <h3 className='font-semibold text-lg'>{mess.messName}</h3>
              <p className='text-gray-600'>₹{mess.monthlyPrice}</p>
            </div>
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
          </div>
        ))}
      </div>
    </div>
  )
}
