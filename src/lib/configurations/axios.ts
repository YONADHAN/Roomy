// lib/configurations/axios.ts
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api',
  withCredentials: true, // if you use cookies or auth tokens
})

// ✅ Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('Unauthorized! Logging out...')
      localStorage.removeItem('token')
      window.location.href = '/admin/auth'
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
