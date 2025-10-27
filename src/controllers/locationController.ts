// src/controllers/locationController.ts
import Location from '@/models/Location'
import connectDB from '@/lib/db/mongoDB/connection'

export const LocationController = {
  async getAll() {
    await connectDB()
    const locations = await Location.find()
    return locations
  },

  async create(data: any) {
    await connectDB()
    const newLocation = new Location(data)
    await newLocation.save()
    return newLocation
  },
}
