// components/AdminContactView.tsx
'use client'

import React from 'react'

export default function AdminContactView() {
  // Dummy data
  const admin = {
    name: 'John Doe',
    personalEmail: 'john.doe@example.com',
    createdAt: '2025-10-26',
    businessEmails: ['contact@mybusiness.com', 'support@mybusiness.com'],
    phoneNumbers: ['+1234567890', '+0987654321'],
    whatsappNumber: '+1234567890',
    address: '123 Main Street, City, Country',
    mapLink: 'https://maps.google.com/?q=123+Main+Street',
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com/johndoe' },
      { platform: 'Instagram', url: 'https://instagram.com/johndoe' },
      { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
    ],
    appName: 'MyApp',
    appLink: 'https://myapp.com',
  }

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6'>
      <h2 className='text-2xl font-semibold text-gray-800'>
        Admin Contact Info
      </h2>

      {/* Personal Info */}
      <div className='space-y-2'>
        <p>
          <span className='font-semibold'>Full Name:</span> {admin.name}
        </p>
        <p>
          <span className='font-semibold'>Email:</span> {admin.personalEmail}
        </p>
        <p>
          <span className='font-semibold'>Account Created:</span>{' '}
          {admin.createdAt}
        </p>
      </div>

      <hr className='border-gray-200' />

      {/* Business Contact Info */}
      <div className='space-y-2'>
        <h3 className='text-xl font-medium text-gray-800'>
          Business Contact Info
        </h3>
        <p>
          <span className='font-semibold'>Business Emails:</span>{' '}
          {admin.businessEmails.join(', ')}
        </p>
        <p>
          <span className='font-semibold'>Phone Numbers:</span>{' '}
          {admin.phoneNumbers.join(', ')}
        </p>
        <p>
          <span className='font-semibold'>WhatsApp:</span>{' '}
          {admin.whatsappNumber}
        </p>
        <p>
          <span className='font-semibold'>Address:</span> {admin.address}
        </p>
        <p>
          <span className='font-semibold'>Map Link:</span>{' '}
          <a
            href={admin.mapLink}
            target='_blank'
            className='text-indigo-600 hover:underline'
          >
            View on Google Maps
          </a>
        </p>
      </div>

      <hr className='border-gray-200' />

      {/* Social Links */}
      <div className='space-y-2'>
        <h3 className='text-xl font-medium text-gray-800'>Social Links</h3>
        {admin.socialLinks.map((link, index) => (
          <p key={index}>
            <span className='font-semibold'>{link.platform}:</span>{' '}
            <a
              href={link.url}
              target='_blank'
              className='text-indigo-600 hover:underline'
            >
              {link.url}
            </a>
          </p>
        ))}
      </div>

      <hr className='border-gray-200' />

      {/* App Info */}
      <div className='space-y-2'>
        <h3 className='text-xl font-medium text-gray-800'>App Info</h3>
        <p>
          <span className='font-semibold'>App Name:</span> {admin.appName}
        </p>
        <p>
          <span className='font-semibold'>App Link:</span>{' '}
          <a
            href={admin.appLink}
            target='_blank'
            className='text-indigo-600 hover:underline'
          >
            {admin.appLink}
          </a>
        </p>
      </div>
    </div>
  )
}
