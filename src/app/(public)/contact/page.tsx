'use client'
import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Instagram,
  Linkedin,
  Send,
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.message) {
      alert('Please fill in all required fields')
      return
    }
    console.log('Form submitted:', formData)
    alert('Message sent successfully!')
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
  }

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Get in <span className='text-blue-600'>Touch</span>
          </h1>
          <p className='text-lg text-gray-600 mb-2'>
            Have questions or feedback?
          </p>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            We'd love to hear from you. Fill out the form below and we'll
            respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Information Card */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-2xl shadow-lg p-8 h-full'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h2>

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

              {/* Phone */}
              <div className='flex items-start gap-4 mb-6'>
                <div className='bg-blue-100 p-3 rounded-full flex-shrink-0'>
                  <Phone className='w-6 h-6 text-blue-600' />
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>Phone</h3>
                  <a
                    href='tel:+918891218045'
                    className='text-gray-700 hover:text-blue-600'
                  >
                    +91 88912 18045
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className='flex items-start gap-4 mb-8'>
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

          {/* Contact Form Card */}
          <div className='lg:col-span-2'>
            <div className='bg-white rounded-2xl shadow-lg p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Send Us a Message
              </h2>

              <div>
                {/* Name and Phone */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Phone / WhatsApp <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Enter your phone number'
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                    />
                  </div>
                </div>

                {/* Email */}
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email address'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                  />
                </div>

                {/* Subject */}
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='What is this regarding?'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                  />
                </div>

                {/* Message */}
                <div className='mb-6'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Message <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='6'
                    placeholder='How can we help you?'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none'
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className='w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2'
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className='mt-12'>
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
            <div className='h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center'>
              <div className='text-center'>
                <MapPin size={64} className='mx-auto text-blue-600 mb-4' />
                <p className='text-gray-600 font-medium'>
                  Map Integration Area
                </p>
                <p className='text-sm text-gray-500 mt-2'>
                  Embed Google Maps or other map service here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
