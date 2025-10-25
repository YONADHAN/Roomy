'use client'
import { useState } from 'react'
import { MapPin, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const popularLocations = [
  'Kaloor',
  'Kalamassery',
  'Tripunithura',
  'Kathrikadavu',
  'Maradu',
  'Palarivattom',
  'Thrikkakara',
  'Kundannoor',
  'Pathadipalam',
  'Kadavanthra',
  'Ernakulam North',
  'Kaloor',
  'Kalamassery',
  'Tripunithura',
  'Kathrikadavu',
  'Maradu',
  'Palarivattom',
  'Thrikkakara',
  'Kundannoor',
  'Pathadipalam',
  'Kadavanthra',
  'Ernakulam North',
]

export default function HeroSection() {
  const [selected, setSelected] = useState('')

  return (
    <section className='bg-gradient-to-b from-blue-50 to-white py-16 text-center px-4 '>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
          🏠 Your Next Room is{' '}
          <span className='text-blue-600'>Just a Tap Away!</span>
        </h1>

        <div className='flex justify-center items-center gap-2 mb-10'>
          <HelpCircle className='text-blue-600 w-5 h-5' />
          <button className='text-blue-600 hover:underline font-medium'>
            How to use?
          </button>
        </div>

        <h2 className='text-xl font-semibold mb-3 text-gray-800'>
          Popular Locations
        </h2>
        <p className='text-gray-500 mb-6'>
          Tap on a location to find your ideal room or hostel
        </p>

        <div className='flex flex-wrap justify-center gap-3 mb-10'>
          {popularLocations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setSelected(loc)}
              className={`px-5 py-2 rounded-xl border shadow-sm transition-all ${
                selected === loc
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white hover:bg-blue-50 border-gray-200'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className='bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 mx-auto shadow-md hover:bg-blue-700 transition'
        >
          <MapPin className='w-5 h-5' />
          View All Locations
        </motion.button>
      </motion.div>
    </section>
  )
}
