// components/MessDetails.tsx
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const dummyMess = {
  messName: 'Edappally Mess',
  monthlyPrice: 4000,
  locationsAvailable: ['Edappally', 'Vytilla'],
  contactNumber: '9876543210',
  mapLink: 'https://maps.google.com',
  closedDays: ['Sunday'],
  specialInfo: 'Famous for authentic Kerala meals',
  images: ['https://via.placeholder.com/600x400'],
  weeklyMenu: {
    monday: { breakfast: 'Idli', lunch: 'Rice & Curry', dinner: 'Chapati' },
    tuesday: { breakfast: 'Dosa', lunch: 'Rice & Fish', dinner: 'Parotta' },
    wednesday: { breakfast: 'Puttu', lunch: 'Sambar Rice', dinner: 'Chapati' },
    thursday: {
      breakfast: 'Upma',
      lunch: 'Vegetable Curry',
      dinner: 'Rice & Curry',
    },
    friday: { breakfast: 'Appam', lunch: 'Chicken Curry', dinner: 'Chapati' },
    saturday: { breakfast: 'Idiyappam', lunch: 'Rice & Curry', dinner: 'Dosa' },
    sunday: { breakfast: 'Dosa', lunch: 'Rice & Curry', dinner: 'Chapati' },
  },
}

export default function MessDetails() {
  const mess = dummyMess

  return (
    <div className='max-w-4xl mx-auto p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>{mess.messName}</h1>
        <Button variant='outline'>Edit</Button>
      </div>

      {/* Image */}
      <div className='w-full h-64 relative rounded overflow-hidden shadow'>
        <img
          src='https://via.placeholder.com/600x400'
          alt={mess.messName}
          className='object-cover w-full h-full'
        />
      </div>

      {/* Basic Info */}
      <Card>
        <CardContent className='space-y-2'>
          <p>
            <strong>Monthly Price:</strong> ₹{mess.monthlyPrice}
          </p>
          <p>
            <strong>Locations Available:</strong>{' '}
            {mess.locationsAvailable.join(', ')}
          </p>
          <p>
            <strong>Contact:</strong> {mess.contactNumber}
          </p>
          <p>
            <strong>Map:</strong>{' '}
            <a
              href={mess.mapLink}
              target='_blank'
              className='text-blue-600 underline'
            >
              View on Google Maps
            </a>
          </p>
          <p>
            <strong>Closed Days:</strong> {mess.closedDays.join(', ')}
          </p>
          <p>
            <strong>Special Info:</strong> {mess.specialInfo}
          </p>
        </CardContent>
      </Card>

      {/* Weekly Menu */}
      <Card>
        <CardContent>
          <h2 className='text-xl font-semibold mb-2'>Weekly Menu</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {Object.entries(mess.weeklyMenu).map(([day, menu]) => (
              <Card key={day} className='p-3 bg-gray-50'>
                <h3 className='font-semibold capitalize'>{day}</h3>
                <p>
                  <strong>Breakfast:</strong> {menu.breakfast}
                </p>
                <p>
                  <strong>Lunch:</strong> {menu.lunch}
                </p>
                <p>
                  <strong>Dinner:</strong> {menu.dinner}
                </p>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
