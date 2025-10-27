// src/app/api/locations/route.ts
import { NextResponse } from 'next/server'
import { LocationController } from '@/controllers/locationController'

// ✅ Handle GET (fetch all locations)
export async function GET() {
  try {
    const data = await LocationController.getAll()
    return NextResponse.json(data, { status: 200 })
  } catch (error: any) {
    console.error('GET /locations error:', error)
    return NextResponse.json(
      { message: 'Error fetching locations' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = await LocationController.create(body)
    return NextResponse.json(data, { status: 201 })
  } catch (error: any) {
    console.error('POST /locations error:', error)
    return NextResponse.json(
      { message: 'Error creating location' },
      { status: 500 }
    )
  }
}
