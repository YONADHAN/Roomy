// models/Notification.ts
import mongoose, { Schema, model, models, Document } from 'mongoose'

export interface INotification extends Document {
  title: string
  message: string
  type: string // "contact", "propertyVisit", "system", etc.
  relatedId?: mongoose.Schema.Types.ObjectId // e.g., Contact or PropertyVisit ID
  relatedModel?: string // e.g., "Contact", "PropertyVisit"
  read: boolean
  createdAt: Date
}

const NotificationSchema = new Schema<INotification>(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ['contact', 'propertyVisit', 'system', 'mess', 'property'],
      default: 'system',
    },
    relatedId: { type: mongoose.Schema.Types.ObjectId },
    relatedModel: { type: String },
    read: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

// Index for unread notifications and sorting by time
NotificationSchema.index({ read: 1, createdAt: -1 })

const Notification =
  models.Notification ||
  model<INotification>('Notification', NotificationSchema)
export default Notification
