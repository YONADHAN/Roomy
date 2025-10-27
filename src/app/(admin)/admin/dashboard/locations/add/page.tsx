'use client'

import LocationForm from '@/components/specific/admin/Forms/location/locationForm'
import { useLocations } from '@/hooks/useLocations'

export default function AddLocationPage() {
  const { createLocation } = useLocations()

  const handleAddLocation = async (data: any) => {
    console.log('Submitted data:', data)
    try {
      await createLocation.mutateAsync(data)
      // Optional: show toast or redirect
      console.log('Location added successfully')
    } catch (error) {
      console.error('Error adding location:', error)
    }
  }

  return (
    <div className='p-6'>
      <LocationForm onSubmit={handleAddLocation} />
    </div>
  )
}
