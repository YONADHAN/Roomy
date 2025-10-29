import { NextResponse } from 'next/server'
import connectDB from '@/lib/db/mongoose/connection'
import Location from '@/models/Location'

// ✅ Get a location by ID
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params // ✅ unwrap the params Promise

  await connectDB()

  const location = await Location.findById(id)
  if (!location) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(location)
}

// ✅ Update a location by ID
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params // ✅ unwrap here too
  await connectDB()

  const data = await req.json()
  const updated = await Location.findByIdAndUpdate(id, data, { new: true })

  if (!updated) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 })
  }

  return NextResponse.json(updated)
}

// ✅ Optional: Delete a location by ID
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  await connectDB()

  const deleted = await Location.findByIdAndDelete(id)
  if (!deleted) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ message: 'Deleted successfully' })
}
