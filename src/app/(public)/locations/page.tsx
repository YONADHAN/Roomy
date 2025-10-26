// components/LocationsPage.jsx
import {
  ArrowLeft,
  Search,
  ArrowRight,
  Home,
  Building2,
  ShieldCheck,
} from 'lucide-react'

// --- Data ---
const locations = [
  { name: 'Kakkanad', count: 76, link: '/locations/Kakkanad' },
  { name: 'Edappally', count: 53, link: '/locations/Edappally' },
  { name: 'Vyttila', count: 31, link: '/locations/Vyttila' },
  { name: 'Kalamassery', count: 13, link: '#' },
  { name: 'Kaloor', count: 13, link: '#' },
  { name: 'Maradu', count: 9, link: '#' },
  { name: 'Thevara', count: 8, link: '#' },
  { name: 'Tripunithura', count: 6, link: '#' },
]

const features = [
  {
    icon: Home,
    title: 'Verified Properties',
    description:
      'Every listing is verified for authenticity and accurate details',
  },
  {
    icon: Building2,
    title: 'Bachelor-Friendly',
    description: 'Properties that explicitly welcome bachelor tenants',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Landlords',
    description:
      'All property owners are screened and verified for a safer renting experience',
  },
]

// --- Sub-Components ---

// Component for a single location card
const LocationCard = ({
  name,
  count,
  link,
}: {
  name: string
  count: number
  link: string
}) => (
  <a
    href={link}
    className='block bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition duration-200 ease-in-out hover:shadow-md hover:border-blue-200'
  >
    <div className='flex justify-between items-center'>
      <div>
        <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
        <p className='text-sm text-gray-500'>{count} properties available</p>
      </div>
      <div className='flex items-center space-x-3'>
        {/* Count Badge */}
        <span className='inline-flex items-center justify-center h-8 w-8 bg-blue-500 text-white text-sm font-medium rounded-full'>
          {count}
        </span>
        {/* Arrow Button */}
        <span className='inline-flex items-center justify-center h-8 w-8 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200'>
          <ArrowRight className='w-4 h-4' />
        </span>
      </div>
    </div>
  </a>
)

// // Component for the Features Section (from your second image)
// const FeaturesSection = ({ trustText }: { trustText: string }) => (
//   <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
//     <div className='max-w-6xl mx-auto'>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className='bg-white rounded-2xl p-8 text-center flex flex-col items-center border border-gray-100'
//           >
//             <div className='p-4 bg-blue-100 text-blue-600 rounded-xl mb-6'>
//               <feature.icon className='w-8 h-8' />
//             </div>
//             <h3 className='text-xl font-semibold text-gray-800 mb-3'>
//               {feature.title}
//             </h3>
//             <p className='text-gray-600 leading-relaxed max-w-xs'>
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       <div className='text-center mt-12'>
//         <div className='inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm text-gray-700 text-md font-medium border border-gray-100'>
//           {trustText}
//         </div>
//       </div>
//     </div>
//   </section>
// )

// // --- Main Page Component ---
const LocationsPage = () => {
  const totalProperties = locations.reduce((sum, loc) => sum + loc.count, 0)
  const totalLocations = locations.length // Placeholder, should be 29 per image

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* 1. Header/Navigation Bar */}
      <header className='sticky top-0 bg-white shadow-sm z-10'>
        <div className='max-w-4xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8'>
          <button className='p-2 text-gray-600 hover:text-gray-800 transition'>
            <ArrowLeft className='w-6 h-6' />
          </button>
          <h1 className='text-xl font-bold text-gray-800'>Browse Locations</h1>
          <button className='p-2 text-gray-600 hover:text-gray-800 transition'>
            <Search className='w-6 h-6' />
          </button>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className='max-w-4xl mx-auto pt-6 pb-12 px-4 sm:px-6 lg:px-8'>
        {/* Summary Text */}
        <p className='text-center text-gray-600 mb-8'>
          Discover <span className='text-blue-600 font-semibold'>266</span>{' '}
          properties across{' '}
          <span className='text-blue-600 font-semibold'>29</span> locations in
          Kochi
        </p>

        {/* Location Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {locations.map((location) => (
            <LocationCard
              key={location.name}
              name={location.name}
              count={location.count}
              link={location.link}
            />
          ))}
        </div>

        {/* Note: In a real app, you'd have pagination or a "View More" button here */}
      </main>

      {/* 3. Features Section (From your second image) */}
      {/* <FeaturesSection trustText='Trusted by 5000+ bachelors in finding their perfect home' /> */}

      {/* 4. Placeholder Footer */}
      <footer className='bg-gray-800 text-white py-10'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Footer Content */}
          <p>
            &copy; {new Date().getFullYear()} Property Website. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LocationsPage
