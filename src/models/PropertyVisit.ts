// models/PropertyVisit.ts
import mongoose, { Schema, model, models } from 'mongoose'

const PropertyVisitSchema = new Schema(
  {
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
    },
    fullName: { type: String, required: true },
    whatsappNumber: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['Student', 'Family', 'Working Professional', 'Company'],
    },
    companyName: { type: String },
    preferredDate: { type: Date, required: true },
    preferredTime: { type: String, required: true }, // "10:00 AM - 11:00 AM"
    acceptedTerms: { type: Boolean, default: false },
    serviceChargeConfirmed: { type: Boolean, default: false },
    reviewedProperty: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    notes: { type: String }, // Admin notes
  },
  { timestamps: true }
)

PropertyVisitSchema.index({ property: 1, status: 1 })
PropertyVisitSchema.index({ preferredDate: 1 })

const PropertyVisit =
  models.PropertyVisit || model('PropertyVisit', PropertyVisitSchema)
export default PropertyVisit
