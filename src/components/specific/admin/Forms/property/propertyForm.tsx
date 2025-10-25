// components/PropertyForm.tsx
'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function PropertyForm() {
  return (
    <form className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow space-y-4'>
      <h2 className='text-2xl font-semibold'>Add Property</h2>

      {/* Owner Info */}
      <div>
        <Label htmlFor='ownerName'>Owner Name</Label>
        <Input type='text' id='ownerName' placeholder="Enter owner's name" />
      </div>

      <div>
        <Label htmlFor='mobileNumber'>Mobile Number</Label>
        <Input
          type='text'
          id='mobileNumber'
          placeholder='Enter mobile number'
        />
      </div>

      {/* Location */}
      <div>
        <Label htmlFor='location'>Location</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Select location' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='loc1'>Location 1</SelectItem>
            <SelectItem value='loc2'>Location 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Property Details */}
      <div>
        <Label htmlFor='size'>Size</Label>
        <Input type='text' id='size' placeholder='E.g., 2 BHK, 1 RK' />
      </div>

      <div>
        <Label htmlFor='propertyType'>Property Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Select type' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Flat'>Flat</SelectItem>
            <SelectItem value='House'>House</SelectItem>
            <SelectItem value='PG'>PG</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor='furnishingStatus'>Furnishing Status</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Select status' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Furnished'>Furnished</SelectItem>
            <SelectItem value='Semi-furnished'>Semi-furnished</SelectItem>
            <SelectItem value='Unfurnished'>Unfurnished</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor='rent'>Rent</Label>
        <Input type='number' id='rent' placeholder='Enter rent' />
      </div>

      <div>
        <Label htmlFor='securityDeposit'>Security Deposit</Label>
        <Input
          type='number'
          id='securityDeposit'
          placeholder='Enter security deposit'
        />
      </div>

      <div>
        <Label htmlFor='floorNumber'>Floor Number</Label>
        <Input type='text' id='floorNumber' placeholder='Enter floor number' />
      </div>

      <div className='flex items-center space-x-2'>
        <Checkbox id='ownerLivesDownstairs' />
        <Label htmlFor='ownerLivesDownstairs'>Owner Lives Downstairs</Label>
      </div>

      <div>
        <Label htmlFor='facilities'>Facilities (comma separated)</Label>
        <Input
          type='text'
          id='facilities'
          placeholder='E.g., AC, Fridge, Washing Machine'
        />
      </div>

      <div>
        <Label htmlFor='parking'>Parking (comma separated)</Label>
        <Input type='text' id='parking' placeholder='E.g., Car, Bike' />
      </div>

      <div>
        <Label htmlFor='distanceToBusStop'>Distance to Bus Stop</Label>
        <Input type='text' id='distanceToBusStop' placeholder='E.g., 200m' />
      </div>

      <div>
        <Label htmlFor='distanceToMetro'>Distance to Metro</Label>
        <Input type='text' id='distanceToMetro' placeholder='E.g., 500m' />
      </div>

      <div>
        <Label htmlFor='nearestBusStop'>Nearest Bus Stop</Label>
        <Input
          type='text'
          id='nearestBusStop'
          placeholder='Enter nearest bus stop'
        />
      </div>

      <div>
        <Label htmlFor='nearestMetro'>Nearest Metro</Label>
        <Input
          type='text'
          id='nearestMetro'
          placeholder='Enter nearest metro'
        />
      </div>

      <div>
        <Label htmlFor='allowedFor'>Allowed For (comma separated)</Label>
        <Input
          type='text'
          id='allowedFor'
          placeholder='E.g., Bachelors, Family'
        />
      </div>

      <div>
        <Label htmlFor='bachelorsAllowed'>Bachelors Allowed (number)</Label>
        <Input type='number' id='bachelorsAllowed' />
      </div>

      <div>
        <Label htmlFor='familyMembersAllowed'>
          Family Members Allowed (number)
        </Label>
        <Input type='number' id='familyMembersAllowed' />
      </div>

      <div>
        <Label htmlFor='extraCharges'>Extra Charges</Label>
        <Input
          type='text'
          id='extraCharges'
          placeholder='Enter extra charges'
        />
      </div>

      <div className='flex items-center space-x-2'>
        <Checkbox id='readyForRent' />
        <Label htmlFor='readyForRent'>Ready for Rent</Label>
      </div>

      <div>
        <Label htmlFor='suitableFor'>Suitable For (comma separated)</Label>
        <Input
          type='text'
          id='suitableFor'
          placeholder='E.g., Students, Working Professionals'
        />
      </div>

      <div>
        <Label htmlFor='mapLink'>Map Link</Label>
        <Input type='text' id='mapLink' placeholder='Enter Google Maps link' />
      </div>

      <div className='flex items-center space-x-2'>
        <Checkbox id='petAllowed' />
        <Label htmlFor='petAllowed'>Pet Allowed</Label>
      </div>

      <div>
        <Label htmlFor='tags'>Tags (comma separated)</Label>
        <Input
          type='text'
          id='tags'
          placeholder='E.g., 2BHK, Furnished, Near Metro'
        />
      </div>

      <div>
        <Label htmlFor='additionalInfo'>Additional Info</Label>
        <Textarea id='additionalInfo' placeholder='Enter additional info' />
      </div>

      <div>
        <Label htmlFor='ebRating'>EB Rating (0-5)</Label>
        <Input type='number' id='ebRating' min={0} max={5} />
      </div>

      <div>
        <Label htmlFor='images'>Images (URLs, comma separated)</Label>
        <Input type='text' id='images' placeholder='Enter image URLs' />
      </div>

      <div>
        <Label htmlFor='videos'>Videos (URLs, comma separated)</Label>
        <Input type='text' id='videos' placeholder='Enter video URLs' />
      </div>

      <Button type='submit' className='mt-4 w-full'>
        Add Property
      </Button>
    </form>
  )
}
