import React from 'react'
import { Search, MapPin, Utensils } from 'lucide-react'

const messList = [
  {
    name: 'Ammas Mess',
    locations: 'Kaloor, Edappally',
    color: 'bg-blue-600 hover:bg-blue-700',
    bgGradient: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Daasanum Vijayanum',
    locations: 'Vyttila, Edappally, Palarivattom',
    color: 'bg-indigo-600 hover:bg-indigo-700',
    bgGradient: 'from-indigo-400 to-indigo-600',
  },
  {
    name: "Mom's Made Mess",
    locations: 'Kaloor, Kadavanthra, Thammanam, Kuttikadavu, Palarivattom',
    color: 'bg-violet-600 hover:bg-violet-700',
    bgGradient: 'from-violet-400 to-violet-600',
  },
]

const MessFinderPage = () => {
  return (
    <div className='min-h-screen bg-gray-50 pt-16 pb-24'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-extrabold text-gray-900 mb-4'>
            Find Your Perfect <span className='text-blue-600'>Mess</span>
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Browse through our curated list of quality mess services and find
            the one that suits your taste and budget.
          </p>
        </header>

        {/* Search Bar */}
        <div className='flex justify-center mb-16'>
          <div className='w-full max-w-xl relative'>
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
            <input
              type='text'
              placeholder='Search by mess name or location...'
              className='w-full py-4 pl-12 pr-6 border border-gray-300 rounded-xl shadow-md focus:ring-blue-500 focus:border-blue-500 text-lg transition duration-150'
            />
          </div>
        </div>

        {/* Mess Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {messList.map((mess, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition duration-300 hover:shadow-xl cursor-pointer group'
            >
              {/* Image Banner with Gradient */}
              <div className='relative h-40 overflow-hidden'>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${mess.bgGradient} group-hover:scale-105 transition-transform duration-300`}
                />

                {/* Food Icon Overlay */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <Utensils className='w-20 h-20 text-white/30 group-hover:text-white/40 transition-colors' />
                </div>

                {/* Decorative Elements */}
                <div className='absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-2xl' />
                <div className='absolute bottom-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-2xl' />

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
              </div>

              {/* Title Banner */}
              <div
                className={`p-5 text-white ${mess.color} flex items-center transition-colors`}
              >
                <Utensils className='w-5 h-5 mr-2' />
                <h2 className='text-lg font-semibold'>{mess.name}</h2>
              </div>

              {/* Info */}
              <div className='p-5'>
                <div className='flex items-start text-gray-600'>
                  <MapPin className='w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-blue-500' />
                  <p className='text-sm leading-relaxed'>{mess.locations}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className='text-center mt-16'>
          <button className='text-blue-600 hover:text-blue-800 font-medium text-lg hover:underline transition'>
            Load More Messes...
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessFinderPage
