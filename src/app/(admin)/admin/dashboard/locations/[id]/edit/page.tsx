'use client'

import { useParams, useRouter } from 'next/navigation'
import LocationForm from '@/components/specific--need to change/admin/Forms/location/locationForm'
import { useLocations } from '@/hooks/useLocations'

export default function EditLocationPage() {
  const { id } = useParams()
  const router = useRouter()
  const { getLocationById, updateLocation } = useLocations()

  const { data: locationData, isLoading } = getLocationById(id as string)

  const handleUpdate = async (formData: any) => {
    try {
      await updateLocation.mutateAsync({ id, data: formData })
      router.push('/admin/dashboard/locations') // go back after update
    } catch (error) {
      console.error('Error updating location:', error)
    }
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Edit Location</h2>
      <LocationForm defaultValues={locationData} onSubmit={handleUpdate} />
    </div>
  )
}
