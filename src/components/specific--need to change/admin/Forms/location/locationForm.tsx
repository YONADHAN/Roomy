'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  locationSchema,
  LocationFormValues,
} from '@/lib/utils/validations/locationSchema'
import { useState } from 'react'

interface LocationFormProps {
  defaultValues?: Partial<LocationFormValues>
  onSubmit?: (data: LocationFormValues) => Promise<void> | void
}

export default function LocationForm({
  defaultValues,
  onSubmit,
}: LocationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationFormValues>({
    resolver: zodResolver(locationSchema),
    defaultValues,
  })

  const handleFormSubmit = async (data: LocationFormValues) => {
    setIsSubmitting(true)
    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // default POST call if not passed from parent
        const res = await fetch('/api/locations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Failed to save location')
        alert('✅ Location added successfully!')
      }
    } catch (err: any) {
      alert(`❌ ${err.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className='max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6'
    >
      <h2 className='text-2xl font-semibold text-gray-800'>
        Add / Edit Location
      </h2>

      {/* Name */}
      <div>
        <label className='block text-gray-700'>Location Name</label>
        <input
          {...register('name')}
          placeholder='Edappally'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500'
        />
        {errors.name && (
          <p className='text-red-500 text-sm'>{errors.name.message}</p>
        )}
      </div>

      {/* Slug */}
      <div>
        <label className='block text-gray-700'>Slug</label>
        <input
          {...register('slug')}
          placeholder='edappally'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500'
        />
        {errors.slug && (
          <p className='text-red-500 text-sm'>{errors.slug.message}</p>
        )}
      </div>

      {/* City */}
      <div>
        <label className='block text-gray-700'>City</label>
        <input
          {...register('city')}
          placeholder='Kochi'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500'
        />
        {errors.city && (
          <p className='text-red-500 text-sm'>{errors.city.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className='block text-gray-700'>Description</label>
        <textarea
          {...register('description')}
          rows={3}
          placeholder='Brief info about this location'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500'
        />
      </div>

      {/* Image */}
      <div>
        <label className='block text-gray-700'>Image URL</label>
        <input
          {...register('image')}
          placeholder='https://example.com/banner.jpg'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500'
        />
        {errors.image && (
          <p className='text-red-500 text-sm'>{errors.image.message}</p>
        )}
      </div>

      {/* Property Count */}
      <div>
        <label className='block text-gray-700'>Property Count</label>
        <input
          type='number'
          {...register('propertyCount', { valueAsNumber: true })}
          placeholder='0'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500'
        />
        {errors.propertyCount && (
          <p className='text-red-500 text-sm'>{errors.propertyCount.message}</p>
        )}
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700'
      >
        {isSubmitting ? 'Saving...' : 'Save Location'}
      </button>
    </form>
  )
}
