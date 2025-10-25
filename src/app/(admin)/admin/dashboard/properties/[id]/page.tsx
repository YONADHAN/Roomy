// components/PropertyDetails.tsx
'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const dummyProperty = {
  ownerName: 'John Doe',
  mobileNumber: '9876543210',
  location: 'Edappally',
  size: '2 BHK',
  propertyType: 'Flat',
  furnishingStatus: 'Furnished',
  rent: 12000,
  securityDeposit: 24000,
  floorNumber: '3rd',
  ownerLivesDownstairs: true,
  facilities: ['AC', 'Fridge', 'Washing Machine'],
  parking: ['Car', 'Bike'],
  distanceToBusStop: '200m',
  distanceToMetro: '500m',
  nearestBusStop: 'Edappally Bus Stop',
  nearestMetro: 'Edappally Metro',
  allowedFor: ['Bachelors', 'Family'],
  bachelorsAllowed: 3,
  familyMembersAllowed: 4,
  extraCharges: 'Water charges extra',
  readyForRent: true,
  suitableFor: ['Students', 'Working Professionals'],
  mapLink: 'https://maps.google.com',
  petAllowed: false,
  tags: ['2BHK', 'Furnished', 'Near Metro'],
  additionalInfo: 'Spacious and well-ventilated property',
  ebRating: 4.5,
  images: [
    'https://via.placeholder.com/600x400?text=Image+1',
    'https://via.placeholder.com/600x400?text=Image+2',
    'https://via.placeholder.com/600x400?text=Image+3',
  ],
  videos: [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/3JZ_D3ELwOQ',
  ],
}

export default function PropertyDetails() {
  const property = dummyProperty

  return (
    <div className='max-w-5xl mx-auto p-6 space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold'>
          {property.size} {property.propertyType} - {property.location}
        </h1>
        <Button variant='outline'>Edit</Button>
      </div>

      {/* Images */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {property.images.map((img, idx) => (
          <div
            key={idx}
            className='w-full h-64 relative rounded overflow-hidden shadow'
          >
            <img
              src={img}
              alt={`Property Image ${idx + 1}`}
              className='object-cover w-full h-full'
            />
          </div>
        ))}
      </div>

      {/* Basic Info */}
      <Card>
        <CardContent className='space-y-2'>
          <p>
            <strong>Owner Name:</strong> {property.ownerName}
          </p>
          <p>
            <strong>Contact:</strong> {property.mobileNumber}
          </p>
          <p>
            <strong>Location:</strong> {property.location}
          </p>
          <p>
            <strong>Size:</strong> {property.size}
          </p>
          <p>
            <strong>Property Type:</strong> {property.propertyType}
          </p>
          <p>
            <strong>Furnishing Status:</strong> {property.furnishingStatus}
          </p>
          <p>
            <strong>Rent:</strong> ₹{property.rent}
          </p>
          <p>
            <strong>Security Deposit:</strong> ₹{property.securityDeposit}
          </p>
          <p>
            <strong>Floor Number:</strong> {property.floorNumber}
          </p>
          <p>
            <strong>Owner Lives Downstairs:</strong>{' '}
            {property.ownerLivesDownstairs ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Facilities:</strong> {property.facilities.join(', ')}
          </p>
          <p>
            <strong>Parking:</strong> {property.parking.join(', ')}
          </p>
          <p>
            <strong>Distance to Bus Stop:</strong> {property.distanceToBusStop}
          </p>
          <p>
            <strong>Distance to Metro:</strong> {property.distanceToMetro}
          </p>
          <p>
            <strong>Nearest Bus Stop:</strong> {property.nearestBusStop}
          </p>
          <p>
            <strong>Nearest Metro:</strong> {property.nearestMetro}
          </p>
          <p>
            <strong>Allowed For:</strong> {property.allowedFor.join(', ')}
          </p>
          <p>
            <strong>Bachelors Allowed:</strong> {property.bachelorsAllowed}
          </p>
          <p>
            <strong>Family Members Allowed:</strong>{' '}
            {property.familyMembersAllowed}
          </p>
          <p>
            <strong>Extra Charges:</strong> {property.extraCharges}
          </p>
          <p>
            <strong>Ready For Rent:</strong>{' '}
            {property.readyForRent ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Suitable For:</strong> {property.suitableFor.join(', ')}
          </p>
          <p>
            <strong>Map:</strong>{' '}
            <a
              href={property.mapLink}
              target='_blank'
              className='text-blue-600 underline'
            >
              View on Google Maps
            </a>
          </p>
          <p>
            <strong>Pet Allowed:</strong> {property.petAllowed ? 'Yes' : 'No'}
          </p>
          <p>
            <strong>Tags:</strong> {property.tags.join(', ')}
          </p>
          <p>
            <strong>Additional Info:</strong> {property.additionalInfo}
          </p>
          <p>
            <strong>EB Rating:</strong> {property.ebRating}
          </p>
        </CardContent>
      </Card>

      {/* Videos */}
      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>Videos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {property.videos.map((vid, idx) => (
            <div key={idx} className='w-full h-64'>
              <iframe
                className='w-full h-full rounded shadow'
                src={vid}
                title={`Property Video ${idx + 1}`}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
