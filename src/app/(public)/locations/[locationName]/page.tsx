'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ChevronLeft,
  SlidersHorizontal,
  X,
  Home,
  Users,
  Bed,
  Building2,
  ChevronRight,
  Star,
} from 'lucide-react'

// Dummy property data
const properties = [
  {
    id: 1,
    title: 'Athani',
    price: 17000,
    rating: 3.0,
    images: 5,
    bhk: '1 BHK',
    deposit: 34000,
    tenant: '2 Girls or 2 Membered Family or 1 Unmarried Couple',
    preference: 'Working Professionals',
    furnished: 'Fully Furnished',
    isNew: true,
  },
  {
    id: 2,
    title: 'Athani',
    price: 20000,
    rating: 4.0,
    images: 7,
    bhk: '2 BHK',
    deposit: 40000,
    tenant: '4 Boys',
    preference: 'Student or Working...',
    furnished: 'Fully Furnished',
    isNew: true,
  },
  {
    id: 3,
    title: 'Kakkanad',
    price: 15000,
    rating: 3.5,
    images: 6,
    bhk: '1 BHK',
    deposit: 30000,
    tenant: 'Family',
    preference: 'Working Professionals',
    furnished: 'Semi Furnished',
    isNew: false,
  },
  {
    id: 4,
    title: 'Info Park',
    price: 25000,
    rating: 4.5,
    images: 8,
    bhk: '2 BHK',
    deposit: 50000,
    tenant: 'Couples',
    preference: 'Working Professionals',
    furnished: 'Fully Furnished',
    isNew: true,
  },
  {
    id: 5,
    title: 'Seaport Airport',
    price: 18000,
    rating: 4.0,
    images: 5,
    bhk: '1 BHK',
    deposit: 36000,
    tenant: 'Girls',
    preference: 'Students',
    furnished: 'Fully Furnished',
    isNew: false,
  },
  {
    id: 6,
    title: 'Edachira',
    price: 22000,
    rating: 3.8,
    images: 6,
    bhk: '2 BHK',
    deposit: 44000,
    tenant: 'Boys',
    preference: 'Working Professionals',
    furnished: 'Semi Furnished',
    isNew: false,
  },
]

// Filter Component
const FilterSidebar = ({ isOpen, onClose, isMobile }) => {
  const [selectedTenants, setSelectedTenants] = useState([])
  const [selectedProperty, setSelectedProperty] = useState([])
  const [selectedLooking, setSelectedLooking] = useState([])

  const tenantOptions = [
    'Boys',
    'Girls',
    'Couples',
    'Family',
    'Mixed',
    'Unmarried Couples',
  ]
  const propertyTypes = ['Apartment', 'Flat', 'House', 'PG']
  const lookingFor = ['Students', 'Working Professionals', 'Family']

  const toggleSelection = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item))
    } else {
      setList([...list, item])
    }
  }

  if (!isOpen && isMobile) return null

  return (
    <div
      className={`bg-white ${
        isMobile ? 'fixed inset-0 z-50 overflow-y-auto' : 'sticky top-4'
      } ${isMobile ? 'p-6' : 'p-4'} rounded-lg shadow-md`}
    >
      {isMobile && (
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-xl font-bold text-gray-900 flex items-center gap-2'>
            <SlidersHorizontal size={20} />
            Filter Properties
          </h2>
          <button
            onClick={onClose}
            className='p-2 hover:bg-gray-100 rounded-full'
          >
            <X size={24} />
          </button>
        </div>
      )}

      {!isMobile && (
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-bold text-blue-600 flex items-center gap-2'>
            <SlidersHorizontal size={18} />
            Filter Properties
          </h2>
          <button className='text-blue-600 text-sm hover:underline'>
            Reset
          </button>
        </div>
      )}

      {/* Rent Range */}
      <div className='mb-6'>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          Rent Range
        </label>
        <select className='w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
          <option>Select rent range</option>
          <option>₹10,000 - ₹15,000</option>
          <option>₹15,000 - ₹20,000</option>
          <option>₹20,000 - ₹25,000</option>
          <option>₹25,000+</option>
        </select>
      </div>

      {/* Preferred Tenants */}
      <div className='mb-6'>
        <label className='block text-sm font-semibold text-gray-700 mb-3'>
          Preferred Tenants
        </label>
        <div className='flex flex-wrap gap-2'>
          {tenantOptions.map((option) => (
            <button
              key={option}
              onClick={() =>
                toggleSelection(option, selectedTenants, setSelectedTenants)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedTenants.includes(option)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* BHK Type */}
      <div className='mb-6'>
        <label className='block text-sm font-semibold text-gray-700 mb-2'>
          BHK Type
        </label>
        <select className='w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
          <option>Select BHK Type</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4+ BHK</option>
        </select>
      </div>

      {/* Property Type */}
      <div className='mb-6'>
        <label className='block text-sm font-semibold text-gray-700 mb-3'>
          Property Type
        </label>
        <div className='flex flex-wrap gap-2'>
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() =>
                toggleSelection(type, selectedProperty, setSelectedProperty)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedProperty.includes(type)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Looking For */}
      <div className='mb-6'>
        <label className='block text-sm font-semibold text-gray-700 mb-3'>
          Looking for
        </label>
        <div className='flex flex-wrap gap-2'>
          {lookingFor.map((option) => (
            <button
              key={option}
              onClick={() =>
                toggleSelection(option, selectedLooking, setSelectedLooking)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedLooking.includes(option)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button className='w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition'>
        Apply Filters
      </button>
    </div>
  )
}

// Property Card Component
const PropertyCard = ({ property }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const router = useRouter()

  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden'>
      {/* Image Section */}
      <div className='relative h-64 bg-gradient-to-br from-gray-200 to-gray-300'>
        {property.isNew && (
          <span className='absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10'>
            New
          </span>
        )}

        {/* Image dots */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10'>
          {[...Array(property.images)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition ${
                currentImage === i ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Placeholder for actual image */}
        <div className='absolute inset-0 flex items-center justify-center'>
          <Home size={48} className='text-gray-400' />
        </div>
      </div>

      {/* Content Section */}
      <div className='p-5'>
        {/* Title and Price */}
        <div className='flex items-start justify-between mb-3'>
          <div>
            <h3 className='text-xl font-bold text-gray-900'>
              {property.title}
            </h3>
            <div className='flex items-center gap-1 mt-1'>
              <span className='text-sm text-gray-600'>EB Rating:</span>
              <div className='flex items-center'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.floor(property.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }
                  />
                ))}
                <span className='text-sm text-gray-600 ml-1'>
                  {property.rating}
                </span>
              </div>
            </div>
          </div>
          <div className='text-right'>
            <div className='text-2xl font-bold text-blue-600'>
              ₹{property.price.toLocaleString()}
            </div>
            <div className='text-sm text-gray-500'>/month</div>
          </div>
        </div>

        {/* Details Grid */}
        <div className='space-y-3 mb-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 text-gray-600'>
              <Home size={18} className='text-blue-500' />
              <span className='text-sm font-medium'>{property.bhk}</span>
            </div>
            <div className='flex items-center gap-2 text-gray-600'>
              <Building2 size={18} className='text-blue-500' />
              <span className='text-sm'>
                ₹{property.deposit.toLocaleString()}
              </span>
            </div>
          </div>

          <div className='flex items-start gap-2 text-gray-600'>
            <Users size={18} className='text-blue-500 mt-0.5 flex-shrink-0' />
            <span className='text-sm'>{property.tenant}</span>
          </div>

          <div className='flex items-center gap-2 text-gray-600'>
            <Users size={18} className='text-blue-500' />
            <span className='text-sm'>{property.preference}</span>
          </div>

          <div className='flex items-center gap-2 text-gray-600'>
            <Bed size={18} className='text-blue-500' />
            <span className='text-sm font-medium'>{property.furnished}</span>
          </div>
        </div>

        {/* View Button */}
        <button
          onClick={() => router.push('/properties/propertey-name')}
          className='w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2'
        >
          View Property
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages)].map((_, i) => i + 1)

  return (
    <div className='flex items-center justify-center gap-2 mt-8 mb-4'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className='p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg font-medium transition ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

// Main App Component
export default function PropertyListingApp() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const itemsPerPage = 6
  const totalPages = Math.ceil(properties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const displayedProperties = properties.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm py-4 px-4 sm:px-6 mb-6'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <button className='flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium'>
            <ChevronLeft size={20} />
            Back
          </button>
          <h1 className='text-2xl font-bold text-gray-900'>Kakkanad</h1>
          <div className='w-16'></div>
        </div>
      </header>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex gap-6'>
          {/* Desktop Filter Sidebar */}
          {!isMobile && (
            <aside className='w-80 flex-shrink-0'>
              <FilterSidebar
                isOpen={true}
                onClose={() => {}}
                isMobile={false}
              />
            </aside>
          )}

          {/* Property Listings */}
          <main className='flex-1'>
            <div className='bg-white rounded-lg shadow-sm p-4 mb-6'>
              <p className='text-gray-700'>
                Found <span className='font-bold'>{properties.length}</span>{' '}
                properties in{' '}
                <span className='font-bold text-blue-600'>Kakkanad</span>
              </p>
            </div>

            {/* Property Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {displayedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </main>
        </div>
      </div>

      {/* Mobile Filter Button */}
      {isMobile && (
        <button
          onClick={() => setFilterOpen(true)}
          className='fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition z-40'
        >
          <SlidersHorizontal size={24} />
        </button>
      )}

      {/* Mobile Filter Overlay */}
      {isMobile && filterOpen && (
        <FilterSidebar
          isOpen={filterOpen}
          onClose={() => setFilterOpen(false)}
          isMobile={true}
        />
      )}
    </div>
  )
}
