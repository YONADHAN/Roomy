// models/Location.ts
import mongoose, { Schema, model, models } from 'mongoose'

const LocationSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true }, // URL-friendly version
    city: { type: String, default: 'Kochi' },
    description: { type: String },
    image: { type: String }, // Optional banner image
    propertyCount: { type: Number, default: 0 }, // Cached count for performance
  },
  { timestamps: true }
)

// Auto-generate slug from name
LocationSchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
  }
  next()
})

const Location = models.Location || model('Location', LocationSchema)
export default Location
