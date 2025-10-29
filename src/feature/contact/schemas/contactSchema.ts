// models/Contact.ts
import mongoose, { Schema, model, models } from 'mongoose'

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
    adminNotes: { type: String },
  },
  { timestamps: true }
)

const Contact = models.Contact || model('Contact', ContactSchema)
export default Contact
