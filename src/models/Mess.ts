// models/Mess.ts
import mongoose, { Schema, model, models } from 'mongoose'

const DailyMenuSchema = new Schema({
  breakfast: { type: String },
  lunch: { type: String },
  dinner: { type: String },
})

const MessSchema = new Schema(
  {
    messName: { type: String, required: true },
    monthlyPrice: { type: Number, required: true },
    locationsAvailable: { type: [String], required: true },
    contactNumber: { type: String, required: true },
    mapLink: { type: String },
    closedDays: { type: [String], default: [] }, // ["Sunday"]
    specialInfo: { type: String },
    images: { type: [String], default: [] },
    videos: { type: [String], default: [] },
    weeklyMenu: {
      monday: { type: DailyMenuSchema },
      tuesday: { type: DailyMenuSchema },
      wednesday: { type: DailyMenuSchema },
      thursday: { type: DailyMenuSchema },
      friday: { type: DailyMenuSchema },
      saturday: { type: DailyMenuSchema },
      sunday: { type: DailyMenuSchema },
    },
  },
  { timestamps: true }
)

const Mess = models.Mess || model('Mess', MessSchema)
export default Mess
