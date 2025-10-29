'use client'
import { Search, Home, Calendar, Check } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Search and Find Your Property',
    description:
      'Use the search and filter tools on the website to find your ideal property.',
    icon: Search,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    number: 2,
    title: 'Review Property Details',
    description:
      'View the property details to review and check if the property meets your needs.',
    icon: Home,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    number: 3,
    title: 'Book Your Visit',
    description:
      'If the property suits you, book your visit. Our support team will coordinate with you.',
    icon: Calendar,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    number: 4,
    title: 'Move In & Enjoy',
    description:
      'Complete the formalities, sign the agreement, and move into your new home.',
    icon: Check,
    color: 'bg-blue-100 text-blue-600',
  },
]

const HowToUse = ({
  pageTitle = 'How to Book a Property Visit',
  pageSubtitle = 'Follow these simple steps to find and book your perfect bachelor-friendly accommodation',
}) => {
  return (
    <div className='min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        {/* Header Section */}
        <header className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-3'>
            {pageTitle.split(' ').map((word, index) =>
              index === 3 ? (
                <span key={index} className='text-blue-600'>
                  {word + ' '}
                </span>
              ) : (
                <span key={index}>{word + ' '}</span>
              )
            )}
          </h1>
          <p className='text-lg text-gray-600'>{pageSubtitle}</p>
        </header>

        {/* Steps Timeline/List */}
        <div className='relative'>
          {/* Vertical Separator Line (The "stem" of the guide) */}
          <div
            className='absolute left-6 top-0 bottom-0 w-px bg-blue-300 transform -translate-x-1/2 md:left-1/2 md:transform md:-translate-x-1/2'
            aria-hidden='true'
          ></div>

          {/* Map over the steps to render each one */}
          {steps.map((step, index) => (
            <div
              key={step.number}
              className='relative flex items-start py-6 pr-4 md:pr-0 md:pl-0 md:justify-start'
            >
              {/* Step Number Circle (Left side on mobile, centered on large screens) */}
              <div className='flex-shrink-0 relative z-10 w-12 h-12 bg-white rounded-full border-2 border-blue-300 flex items-center justify-center text-xl font-semibold text-blue-600 shadow-md'>
                {step.number}
              </div>

              {/* Step Content Card */}
              <div className='ml-6 flex-grow rounded-xl bg-white p-6 shadow-lg transition duration-300 ease-in-out hover:shadow-xl border border-gray-100'>
                <div className='flex items-center'>
                  {/* Icon */}
                  <div className={`p-3 rounded-xl ${step.color} mr-4`}>
                    <step.icon className='w-6 h-6' />
                  </div>
                  {/* Text Content */}
                  <div>
                    <h2 className='text-xl font-semibold text-gray-800 mb-1'>
                      {step.title}
                    </h2>
                    <p className='text-gray-600'>{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowToUse
