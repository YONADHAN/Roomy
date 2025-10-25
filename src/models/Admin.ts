//admin model
// models/Admin.ts
import mongoose, { Schema, model, models, Document } from 'mongoose'

export interface ISocialLink {
  platform: string // "Facebook", "Instagram", "LinkedIn", "YouTube"
  url: string
}

export interface IAdmin extends Document {
  name: string
  personalEmail: string // used to login
  password: string // hashed password
  createdAt: Date

  // Business contact info
  businessEmails: string[]
  phoneNumbers: string[]
  whatsappNumber?: string
  address?: string
  mapLink?: string
  socialLinks: ISocialLink[]
  appName?: string
  appLink?: string
}

const SocialLinkSchema = new Schema<ISocialLink>({
  platform: { type: String, required: true },
  url: { type: String, required: true },
})

const AdminSchema = new Schema<IAdmin>(
  {
    name: { type: String, required: true },
    personalEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },

    // Business contact info
    businessEmails: { type: [String], default: [] },
    phoneNumbers: { type: [String], default: [] },
    whatsappNumber: { type: String },
    address: { type: String },
    mapLink: { type: String },
    socialLinks: { type: [SocialLinkSchema], default: [] },
    appName: { type: String },
    appLink: { type: String },

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

const Admin = models.Admin || model<IAdmin>('Admin', AdminSchema)
export default Admin
