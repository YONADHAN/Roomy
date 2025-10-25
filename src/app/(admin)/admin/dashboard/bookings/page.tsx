// components/BookingRequests.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface BookingRequest {
  id: string
  userName: string
  userEmail: string
  propertyName: string
  date: string
  status: 'Unresolved' | 'Resolved'
}

const dummyRequests: BookingRequest[] = [
  {
    id: '1',
    userName: 'Alice Johnson',
    userEmail: 'alice@example.com',
    propertyName: 'Edappally Flat',
    date: '2025-10-25',
    status: 'Unresolved',
  },
  {
    id: '2',
    userName: 'Bob Smith',
    userEmail: 'bob@example.com',
    propertyName: 'Vytilla House',
    date: '2025-10-24',
    status: 'Resolved',
  },
  {
    id: '3',
    userName: 'Charlie Lee',
    userEmail: 'charlie@example.com',
    propertyName: 'MG Road PG',
    date: '2025-10-23',
    status: 'Unresolved',
  },
]

export default function BookingRequests() {
  const [requests, setRequests] = useState(dummyRequests)

  const toggleStatus = (id: string) => {
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              status: r.status === 'Unresolved' ? 'Resolved' : 'Unresolved',
            }
          : r
      )
    )
  }

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Booking Requests</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto border border-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-2 text-left'>User Name</th>
              <th className='px-4 py-2 text-left'>Email</th>
              <th className='px-4 py-2 text-left'>Property</th>
              <th className='px-4 py-2 text-left'>Date</th>
              <th className='px-4 py-2 text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className='border-t'>
                <td className='px-4 py-2'>{req.userName}</td>
                <td className='px-4 py-2'>{req.userEmail}</td>
                <td className='px-4 py-2'>{req.propertyName}</td>
                <td className='px-4 py-2'>{req.date}</td>
                <td className='px-4 py-2'>
                  <Button
                    size='sm'
                    variant={
                      req.status === 'Unresolved' ? 'destructive' : 'outline'
                    }
                    onClick={() => toggleStatus(req.id)}
                  >
                    {req.status}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
