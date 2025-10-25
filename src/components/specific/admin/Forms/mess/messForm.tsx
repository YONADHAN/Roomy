// components/AddMessForm.tsx
'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function MessForm() {
  return (
    <form className='max-w-3xl mx-auto p-6 bg-white rounded-lg shadow space-y-4'>
      <h2 className='text-2xl font-semibold'>Add Mess Details</h2>

      <div>
        <Label htmlFor='messName'>Mess Name</Label>
        <Input type='text' id='messName' placeholder='Enter mess name' />
      </div>

      <div>
        <Label htmlFor='monthlyPrice'>Monthly Price</Label>
        <Input
          type='number'
          id='monthlyPrice'
          placeholder='Enter monthly price'
        />
      </div>

      <div>
        <Label htmlFor='locationsAvailable'>
          Locations Available (comma separated)
        </Label>
        <Input
          type='text'
          id='locationsAvailable'
          placeholder='E.g., Edappally, Vytilla'
        />
      </div>

      <div>
        <Label htmlFor='contactNumber'>Contact Number</Label>
        <Input
          type='text'
          id='contactNumber'
          placeholder='Enter contact number'
        />
      </div>

      <div>
        <Label htmlFor='mapLink'>Map Link</Label>
        <Input type='text' id='mapLink' placeholder='Enter Google Maps link' />
      </div>

      <div>
        <Label htmlFor='closedDays'>Closed Days (comma separated)</Label>
        <Input type='text' id='closedDays' placeholder='E.g., Sunday' />
      </div>

      <div>
        <Label htmlFor='specialInfo'>Special Info</Label>
        <Textarea id='specialInfo' placeholder='Enter any special info' />
      </div>

      <div>
        <Label htmlFor='images'>Images (URLs, comma separated)</Label>
        <Input type='text' id='images' placeholder='Enter image URLs' />
      </div>

      <div>
        <Label htmlFor='videos'>Videos (URLs, comma separated)</Label>
        <Input type='text' id='videos' placeholder='Enter video URLs' />
      </div>

      <h3 className='text-xl font-medium mt-4'>Weekly Menu</h3>

      {[
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ].map((day) => (
        <div key={day} className='border p-4 rounded space-y-2'>
          <h4 className='font-semibold capitalize'>{day}</h4>
          <div>
            <Label htmlFor={`${day}-breakfast`}>Breakfast</Label>
            <Input
              type='text'
              id={`${day}-breakfast`}
              placeholder='Breakfast menu'
            />
          </div>
          <div>
            <Label htmlFor={`${day}-lunch`}>Lunch</Label>
            <Input type='text' id={`${day}-lunch`} placeholder='Lunch menu' />
          </div>
          <div>
            <Label htmlFor={`${day}-dinner`}>Dinner</Label>
            <Input type='text' id={`${day}-dinner`} placeholder='Dinner menu' />
          </div>
        </div>
      ))}

      <Button type='submit' className='mt-4 w-full'>
        Add Mess
      </Button>
    </form>
  )
}
