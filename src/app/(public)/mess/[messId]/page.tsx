'use client'
import React, { useState } from 'react'
import {
  ChevronLeft,
  IndianRupee,
  MapPin,
  Phone,
  Coffee,
  Sun,
  Moon,
  Utensils,
} from 'lucide-react'

const messData = {
  name: 'Daasanum Vijayanum',
  monthlyPrice: 3000,
  locations: 'Vyttila, Edappally, Palarivattom',
  contact: '9074627399',
  weeklyMenu: [
    {
      day: 'Monday',
      meals: {
        breakfast: { icon: Coffee, name: 'Breakfast', items: 'Masala Dosa' },
        lunch: { icon: Sun, name: 'Lunch', items: 'Chicken biryani' },
        dinner: {
          icon: Moon,
          name: 'Dinner',
          items: '3 Parotta / Appam / Chappathi + Egg Masala curry',
        },
      },
    },
    {
      day: 'Tuesday',
      meals: {
        breakfast: {
          icon: Coffee,
          name: 'Breakfast',
          items: '3 Appam + Veg curry',
        },
        lunch: { icon: Sun, name: 'Lunch', items: 'Fish curry meals' },
        dinner: {
          icon: Moon,
          name: 'Dinner',
          items: 'Chicken fried rice / Veg fried rice',
        },
      },
    },
    {
      day: 'Wednesday',
      meals: {
        breakfast: {
          icon: Coffee,
          name: 'Breakfast',
          items: '3 Puttu / Appam / Kaada curry',
        },
        lunch: { icon: Sun, name: 'Lunch', items: 'Meals + Omelette' },
        dinner: { icon: Moon, name: 'Dinner', items: 'Appam + Egg curry' },
      },
    },
    {
      day: 'Thursday',
      meals: {
        breakfast: {
          icon: Coffee,
          name: 'Breakfast',
          items: '3 Idli + Sambar + Chutney',
        },
        lunch: { icon: Sun, name: 'Lunch', items: 'Chicken curry meals' },
        dinner: {
          icon: Moon,
          name: 'Dinner',
          items: '2 Chappathi + Dal fry + Veg curry',
        },
      },
    },
    {
      day: 'Friday',
      meals: {
        breakfast: {
          icon: Coffee,
          name: 'Breakfast',
          items: 'Poori + Potato curry',
        },
        lunch: { icon: Sun, name: 'Lunch', items: 'Fish fry + Meals' },
        dinner: {
          icon: Moon,
          name: 'Dinner',
          items: 'Veg biryani / Chicken biryani',
        },
      },
    },
    {
      day: 'Saturday',
      meals: {
        breakfast: {
          icon: Coffee,
          name: 'Breakfast',
          items: 'Pongal + Vada + Chutney',
        },
        lunch: { icon: Sun, name: 'Lunch', items: 'Mutton curry + Meals' },
        dinner: {
          icon: Moon,
          name: 'Dinner',
          items: '3 Parotta + Chicken curry',
        },
      },
    },
    {
      day: 'Sunday',
      meals: {
        breakfast: {
          icon: Coffee,
          name: 'Breakfast',
          items: 'Appam + Chicken stew',
        },
        lunch: { icon: Sun, name: 'Lunch', items: 'Special Sunday meals' },
        dinner: {
          icon: Moon,
          name: 'Dinner',
          items: 'Fried rice + Manchurian',
        },
      },
    },
  ],
}

export default function MessDetailsPage() {
  const [selectedDay, setSelectedDay] = useState(0)

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      {/* Header */}
      <header className='bg-white shadow-sm sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 py-4'>
          <div className='flex items-center gap-4'>
            <button className='p-2 hover:bg-gray-100 rounded-full transition'>
              <ChevronLeft size={24} className='text-gray-700' />
            </button>
            <div>
              <h1 className='text-2xl sm:text-3xl font-bold text-blue-700'>
                {messData.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8'>
        {/* Info Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
          {/* Monthly Price Card */}
          <div className='bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg overflow-hidden'>
            <div className='p-6 text-white'>
              <div className='flex items-center gap-3 mb-3'>
                <IndianRupee className='w-6 h-6' />
                <h3 className='text-xl font-bold'>Monthly Price</h3>
              </div>
              <p className='text-3xl font-extrabold'>
                ₹ {messData.monthlyPrice} /-
              </p>
            </div>
          </div>

          {/* Locations Card */}
          <div className='bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg overflow-hidden'>
            <div className='p-6 text-white'>
              <div className='flex items-center gap-3 mb-3'>
                <MapPin className='w-6 h-6' />
                <h3 className='text-xl font-bold'>Locations Available</h3>
              </div>
              <p className='text-lg font-medium'>{messData.locations}</p>
            </div>
          </div>

          {/* Contact Card */}
          <div className='bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg overflow-hidden'>
            <div className='p-6 text-white'>
              <div className='flex items-center gap-3 mb-3'>
                <Phone className='w-6 h-6' />
                <h3 className='text-xl font-bold'>Contact</h3>
              </div>
              <p className='text-2xl font-bold'>{messData.contact}</p>
            </div>
          </div>
        </div>

        {/* Weekly Menu Title */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-blue-700 mb-2'>
            Weekly Menu
          </h2>
          <p className='text-gray-600'>Tap on any day to view the full menu</p>
        </div>

        {/* Day Selector - Horizontal Scroll on Mobile */}
        <div className='mb-8 overflow-x-auto pb-4'>
          <div className='flex gap-3 min-w-max md:justify-center px-2'>
            {messData.weeklyMenu.map((dayMenu, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  selectedDay === index
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
                }`}
              >
                {dayMenu.day}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Day Menu Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {Object.entries(messData.weeklyMenu[selectedDay].meals).map(
            ([mealType, meal]) => {
              const MealIcon = meal.icon
              return (
                <div
                  key={mealType}
                  className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
                >
                  {/* Gradient Header */}
                  <div className='bg-gradient-to-br from-blue-500 to-cyan-500 p-5'>
                    <div className='flex items-center gap-3 text-white'>
                      <div className='bg-white/20 p-3 rounded-full'>
                        <MealIcon className='w-6 h-6' />
                      </div>
                      <h3 className='text-xl font-bold'>{meal.name}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='p-6'>
                    <div className='flex items-start gap-3'>
                      <Utensils className='w-5 h-5 text-blue-500 mt-1 flex-shrink-0' />
                      <p className='text-gray-700 text-lg leading-relaxed'>
                        {meal.items}
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>

        {/* Full Week View - Desktop Only */}
        <div className='hidden lg:block mt-12'>
          <div className='bg-white rounded-2xl shadow-lg p-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
              Complete Week Menu
            </h3>
            <div className='space-y-6'>
              {messData.weeklyMenu.map((dayMenu, index) => (
                <div
                  key={index}
                  className={`border-l-4 ${
                    selectedDay === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 bg-gray-50'
                  } rounded-r-xl p-6 transition-colors`}
                >
                  <h4 className='text-xl font-bold text-gray-900 mb-4'>
                    {dayMenu.day}
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {Object.entries(dayMenu.meals).map(([mealType, meal]) => {
                      const MealIcon = meal.icon
                      return (
                        <div key={mealType} className='flex items-start gap-3'>
                          <div className='bg-blue-600 p-2 rounded-full flex-shrink-0'>
                            <MealIcon className='w-4 h-4 text-white' />
                          </div>
                          <div>
                            <p className='font-semibold text-gray-900'>
                              {meal.name}
                            </p>
                            <p className='text-sm text-gray-600 mt-1'>
                              {meal.items}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-center text-white'>
          <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
            Ready to Join?
          </h3>
          <p className='text-lg mb-6 text-blue-100'>
            Contact us now to book your monthly mess subscription
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button className='bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition flex items-center gap-2'>
              <Phone size={20} />
              Call Now
            </button>
            <button className='bg-blue-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition'>
              Book Your Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
