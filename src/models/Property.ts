// models/Property.ts
import mongoose, { Schema, model, models } from 'mongoose'

const PropertySchema = new Schema(
  {
    ownerName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
      required: true,
    },
    size: { type: String, required: true }, // e.g., "2 BHK", "1 RK"
    propertyType: { type: String, required: true }, // "Flat", "House", "PG"
    furnishingStatus: { type: String, required: true }, // "Furnished", "Semi-furnished", "Unfurnished"
    rent: { type: Number, required: true },
    securityDeposit: { type: Number, required: true },
    floorNumber: { type: String },
    ownerLivesDownstairs: { type: Boolean, default: false },
    facilities: { type: [String], default: [] }, // ["AC", "Fridge", "Washing Machine"]
    parking: { type: [String], default: [] }, // ["Car", "Bike"]
    distanceToBusStop: { type: String },
    distanceToMetro: { type: String },
    nearestBusStop: { type: String },
    nearestMetro: { type: String },
    allowedFor: { type: [String], default: [] }, // ["Bachelors", "Family"]
    bachelorsAllowed: { type: Number },
    familyMembersAllowed: { type: Number },
    extraCharges: { type: String },
    readyForRent: { type: Boolean, default: true },
    suitableFor: { type: [String], default: [] }, // ["Students", "Working Professionals"]
    mapLink: { type: String },
    petAllowed: { type: Boolean, default: false },
    tags: { type: [String], default: [] }, // For search optimization
    additionalInfo: { type: String },
    ebRating: { type: Number, min: 0, max: 5 }, // EasyBroker internal rating
    images: { type: [String], default: [] }, // Array of image URLs
    videos: { type: [String], default: [] }, // Array of YouTube/video URLs
  },
  { timestamps: true }
)

// Indexes for better query performance
PropertySchema.index({ location: 1, rent: 1 })
PropertySchema.index({ propertyType: 1, furnishingStatus: 1 })
PropertySchema.index({ tags: 1 })

const Property = models.Property || model('Property', PropertySchema)
export default Property
