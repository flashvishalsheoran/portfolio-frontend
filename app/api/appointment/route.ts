import { NextRequest, NextResponse } from 'next/server'
import { sendAppointmentEmail } from '@/backend/services/emailService'

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, phone, purpose, message } = body

    // Validate required fields
    if (!name || !phone || !purpose) {
      return NextResponse.json(
        { error: 'Missing required fields. Please provide name, phone, and purpose.' },
        { status: 400 }
      )
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format.' },
        { status: 400 }
      )
    }

    // Send appointment email
    const emailResult = await sendAppointmentEmail({
      name,
      phone,
      purpose,
      message: message || 'No additional information provided',
    })

    if (emailResult.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Appointment request received successfully! We will contact you within 24 hours.' 
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Failed to send appointment request. Please try again or call us directly.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error processing appointment request:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

