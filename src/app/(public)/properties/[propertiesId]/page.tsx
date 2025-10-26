'use client'
import React, { useState, useRef } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Share2,
  MapPin,
  Search,
  Maximize2,
  Star,
  Sofa,
  Building2,
  Users,
  Bed,
  Calendar,
  IndianRupee,
  Shield,
  Zap,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react'

// Dummy data
const propertyData = {
  title: 'Kakkanad - Athani',
  rating: 3.0,
  bhk: '1 RK',
  furnishing: 'Semi-Furnished',
  rent: 11500,
  images: [
    { type: 'image', url: '/api/placeholder/800/600', alt: 'Kitchen View' },
    { type: 'image', url: '/api/placeholder/800/600', alt: 'Bedroom View' },
    { type: 'image', url: '/api/placeholder/800/600', alt: 'Bathroom View' },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Property Tour',
    },
    { type: 'image', url: '/api/placeholder/800/600', alt: 'Balcony View' },
    { type: 'image', url: '/api/placeholder/800/600', alt: 'Living Area' },
    {
      type: 'video',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      title: 'Neighborhood Tour',
    },
  ],
  details: {
    type: '1 RK',
    propertyType: 'House',
    furnishingType: 'Semi-Furnished',
    floorNumber: '2',
  },
  pricing: {
    monthlyRent: 11500,
    securityDeposit: 34500,
    extraCharges: 'Water Charge, Electricity Bill, Maintenance Fee',
  },
  amenities: [
    'WiFi Available',
    'Parking Available',
    '24/7 Water Supply',
    'Power Backup',
    'Security Guard',
    'Lift Available',
  ],
  preferences: {
    tenants: '2 Girls or 2 Membered Family or 1 Unmarried Couple',
    lookingFor: 'Working Professionals, Students',
  },
  description:
    'Spacious and well-maintained 1 RK available in Athani, Kakkanad. Located in a prime area with easy access to IT parks, shopping centers, and public transport. The property is semi-furnished with basic amenities and is perfect for working professionals or small families.',
  address: 'Athani Road, Kakkanad, Kochi, Kerala 682030',
}

export default function PropertyDetailsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const scrollContainerRef = useRef(null)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      scrollToIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < propertyData.images.length - 1) {
      setCurrentIndex(currentIndex + 1)
      scrollToIndex(currentIndex + 1)
    }
  }

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current
    if (container) {
      const itemWidth = container.offsetWidth
      container.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth',
      })
    }
  }

  const handleScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      const itemWidth = container.offsetWidth
      const newIndex = Math.round(container.scrollLeft / itemWidth)
      setCurrentIndex(newIndex)
    }
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm py-4 px-4 sm:px-6 sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <button className='p-2 hover:bg-gray-100 rounded-full transition'>
              <ChevronLeft size={24} className='text-gray-700' />
            </button>
            <div className='flex items-center gap-2 text-gray-600'>
              <Home size={20} />
              <span className='text-sm'>/</span>
              <span className='text-sm font-medium'>Property Details</span>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button className='bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition flex gap-x-2 place-items-center'>
              <div>
                <Phone size={18} />
              </div>{' '}
              Call Now
            </button>
            <button className='bg-white text-blue-500 font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 hover:text-white border transition flex gap-x-2 place-items-center'>
              WhatsApp
            </button>
            <button className='flex items-center gap-2 border border-gray-300 px-4 py-2.5 rounded-lg hover:bg-gray-50 transition'>
              <Share2 size={18} />
              <span className='hidden sm:inline'>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Title Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6'>
        <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3'>
          {propertyData.title}
        </h1>
        <div className='flex items-center gap-4 flex-wrap'>
          <div className='flex items-center gap-2'>
            <span className='text-gray-600 font-medium'>EB Rating:</span>
            <div className='flex items-center gap-1'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.floor(propertyData.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }
                />
              ))}
              <span className='text-gray-700 font-semibold ml-1'>
                {propertyData.rating}
              </span>
            </div>
          </div>
          <div className='flex items-center gap-4 text-blue-600 font-semibold'>
            <span>{propertyData.bhk}</span>
            <span>•</span>
            <span>{propertyData.furnishing}</span>
            <span>•</span>
            <span>₹{propertyData.rent}/month</span>
          </div>
        </div>
      </div>

      {/* Image Gallery with Horizontal Scroll */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 mb-8'>
        <div className='relative bg-white rounded-2xl shadow-lg overflow-hidden'>
          {/* Main Gallery */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className='flex overflow-x-auto snap-x snap-mandatory scrollbar-hide'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {propertyData.images.map((item, index) => (
              <div key={index} className='min-w-full snap-center'>
                {item.type === 'image' ? (
                  <div className='relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center'>
                    <div className='absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2'>
                      <Maximize2 size={16} />
                      Fullscreen
                    </div>
                    <Home size={64} className='text-gray-400' />
                    <span className='absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm'>
                      {item.alt}
                    </span>
                  </div>
                ) : (
                  <div className='w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-black flex items-center justify-center'>
                    <iframe
                      width='100%'
                      height='100%'
                      src={item.url}
                      title={item.title}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='w-full h-full'
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Bottom Left */}
          <div className='absolute bottom-4 left-4 flex items-center gap-2 z-30'>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className='bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition'
            >
              <ChevronLeft size={20} className='text-gray-800' />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === propertyData.images.length - 1}
              className='bg-white/90 hover:bg-white p-2.5 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition'
            >
              <ChevronRight size={20} className='text-gray-800' />
            </button>
          </div>

          {/* Image Indicators - Bottom Right */}
          <div className='absolute bottom-4 right-4 flex items-center gap-2 z-30'>
            {propertyData.images.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  scrollToIndex(index)
                }}
                className={`transition-all ${
                  currentIndex === index
                    ? 'w-8 h-2 bg-white rounded-full'
                    : 'w-2 h-2 bg-white/60 rounded-full hover:bg-white/80'
                }`}
                aria-label={`Go to ${item.type} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 pb-12 space-y-6'>
        {/* Distance Calculator */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <MapPin className='text-blue-600' size={24} />
            Distance Calculator
          </h2>
          <div className='relative'>
            <input
              type='text'
              placeholder='Enter landmark or location...'
              className='w-full p-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
            <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'>
              <Search size={24} />
            </button>
          </div>
        </div>

        {/* Property Details */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-6'>
            Property Details
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div>
              <p className='text-gray-600 text-sm mb-1'>Type</p>
              <p className='text-gray-900 font-semibold text-lg'>
                {propertyData.details.type}
              </p>
            </div>
            <div>
              <p className='text-gray-600 text-sm mb-1'>Property Type</p>
              <p className='text-gray-900 font-semibold text-lg'>
                {propertyData.details.propertyType}
              </p>
            </div>
            <div>
              <p className='text-gray-600 text-sm mb-1'>Furnishing Type</p>
              <p className='text-gray-900 font-semibold text-lg'>
                {propertyData.details.furnishingType}
              </p>
            </div>
            <div>
              <p className='text-gray-600 text-sm mb-1'>Floor Number</p>
              <p className='text-gray-900 font-semibold text-lg'>
                {propertyData.details.floorNumber}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Information */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-6'>
            Pricing Information
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div>
              <p className='text-gray-600 text-sm mb-1'>Monthly Rent</p>
              <p className='text-gray-900 font-semibold text-2xl'>
                ₹ {propertyData.pricing.monthlyRent}/-
              </p>
            </div>
            <div>
              <p className='text-gray-600 text-sm mb-1'>Security Deposit</p>
              <p className='text-gray-900 font-semibold text-2xl'>
                ₹ {propertyData.pricing.securityDeposit}/-
              </p>
            </div>
            <div>
              <p className='text-gray-600 text-sm mb-1'>Extra Charges</p>
              <p className='text-gray-900 font-medium'>
                {propertyData.pricing.extraCharges}
              </p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
            <Sofa className='text-blue-600' size={24} />
            Amenities
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {propertyData.amenities.map((amenity, index) => (
              <div
                key={index}
                className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'
              >
                <div className='w-2 h-2 bg-blue-600 rounded-full'></div>
                <span className='text-gray-700 font-medium'>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tenant Preferences */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
            <Users className='text-blue-600' size={24} />
            Tenant Preferences
          </h2>
          <div className='space-y-4'>
            <div>
              <p className='text-gray-600 text-sm mb-2'>Preferred Tenants</p>
              <p className='text-gray-900 font-medium text-lg'>
                {propertyData.preferences.tenants}
              </p>
            </div>
            <div>
              <p className='text-gray-600 text-sm mb-2'>Looking For</p>
              <p className='text-gray-900 font-medium text-lg'>
                {propertyData.preferences.lookingFor}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-4'>
            About this Property
          </h2>
          <p className='text-gray-700 leading-relaxed'>
            {propertyData.description}
          </p>
        </div>

        {/* Location */}
        <div className='bg-white rounded-xl shadow-md p-6'>
          <h2 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <MapPin className='text-blue-600' size={24} />
            Location
          </h2>
          <p className='text-gray-700 mb-4'>{propertyData.address}</p>
          <div className='w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center'>
            <MapPin size={48} className='text-gray-400' />
          </div>
        </div>

        {/* Contact Section */}
        <div className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-md p-6 text-white'>
          <h2 className='text-2xl font-bold mb-4'>
            Interested in this property?
          </h2>
          <p className='mb-6 text-blue-100'>
            Contact the owner to schedule a visit or get more information
          </p>
          <div className='flex flex-wrap gap-3'>
            <button className='bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition flex items-center gap-2'>
              <Phone size={20} />
              Call Now
            </button>
            <button className='bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition flex items-center gap-2'>
              <MessageSquare size={20} />
              Send Message
            </button>
            <button className='bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-900 transition flex items-center gap-2'>
              <Mail size={20} />
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
