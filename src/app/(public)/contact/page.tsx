'use client'
import React from 'react'
import { Mail, Phone, MapPin, Youtube, Instagram, Linkedin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Get in <span className='text-blue-600'>Touch</span>
          </h1>
          <p className='text-lg text-gray-600 mb-2'>
            We’re just a call or message away.
          </p>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Feel free to reach out on WhatsApp or call directly. We’ll be happy
            to help you.
          </p>
        </div>

        {/* Contact Card */}
        <div className='bg-white rounded-2xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>
            Contact Information
          </h2>

          {/* Phone */}
          <div className='flex items-start gap-4 mb-6'>
            <div className='bg-blue-100 p-3 rounded-full flex-shrink-0'>
              <Phone className='w-6 h-6 text-blue-600' />
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-1'>
                Phone / WhatsApp
              </h3>
              <p className='text-gray-700'>
                <a
                  href='tel:+918891218045'
                  className='text-blue-600 hover:underline'
                >
                  +91 88912 18045
                </a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-start gap-4 mb-6'>
            <div className='bg-blue-100 p-3 rounded-full flex-shrink-0'>
              <Mail className='w-6 h-6 text-blue-600' />
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-1'>Email</h3>
              <a
                href='mailto:hey@easybroker.co.in'
                className='text-blue-600 hover:underline'
              >
                hey@easybroker.co.in
              </a>
            </div>
          </div>

          {/* Location */}
          <div className='flex items-start gap-4 mb-6'>
            <div className='bg-blue-100 p-3 rounded-full flex-shrink-0'>
              <MapPin className='w-6 h-6 text-blue-600' />
            </div>
            <div>
              <h3 className='font-semibold text-gray-900 mb-1'>Location</h3>
              <p className='text-gray-700 leading-relaxed'>
                H.No.54/58 Kaloor-Kadavanthra Road,
                <br />
                Kumaranashan Junction,
                <br />
                Kochi, Kerala, India - 682017
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className='pt-6 border-t border-gray-200'>
            <h3 className='font-semibold text-gray-900 mb-4'>Follow Us</h3>
            <div className='flex items-center gap-4'>
              <button
                onClick={() => window.open('#', '_blank')}
                className='bg-red-100 p-3 rounded-full hover:bg-red-200 transition'
                aria-label='YouTube'
              >
                <Youtube className='w-5 h-5 text-red-600' />
              </button>
              <button
                onClick={() => window.open('#', '_blank')}
                className='bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition'
                aria-label='Instagram'
              >
                <Instagram className='w-5 h-5 text-pink-600' />
              </button>
              <button
                onClick={() => window.open('#', '_blank')}
                className='bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5 text-blue-600' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
