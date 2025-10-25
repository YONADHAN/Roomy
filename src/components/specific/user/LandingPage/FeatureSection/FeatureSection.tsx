'use client'
// components/FeaturesSection.jsx
import { Home, Building2, ShieldCheck } from 'lucide-react' // Using lucide-react for icons

const features = [
  {
    icon: Home,
    title: 'Verified Properties',
    description:
      'Every listing is verified for authenticity and accurate details',
  },
  {
    icon: Building2, // Changed from a generic building to Building2 for clarity
    title: 'Bachelor-Friendly',
    description: 'Properties that explicitly welcome bachelor tenants',
  },
  {
    icon: ShieldCheck, // Changed from a generic shield to ShieldCheck for clarity
    title: 'Verified Landlords',
    description:
      'All property owners are screened and verified for a safer renting experience',
  },
]

const FeaturesSection = ({
  trustText = 'Trusted by 5000+ bachelors in finding their perfect home',
}) => {
  return (
    <section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center border border-gray-100 transition duration-300 ease-in-out hover:shadow-xl'
            >
              {/* Icon */}
              <div className='p-4 bg-blue-100 text-blue-600 rounded-xl mb-6'>
                <feature.icon className='w-8 h-8' />
              </div>
              {/* Title */}
              <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                {feature.title}
              </h3>
              {/* Description */}
              <p className='text-gray-600 leading-relaxed max-w-xs'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge/Text */}
        <div className='text-center mt-12'>
          <div className='inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm text-gray-700 text-md font-medium border border-gray-100'>
            {/* Optional: Add a small star or check icon here if desired */}
            {trustText}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
