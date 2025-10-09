/**
 * Type definitions for appointment-related data
 */

export interface AppointmentData {
  name: string
  phone: string
  purpose: string
  message: string
}

export interface AppointmentResponse {
  success: boolean
  message?: string
  error?: string
}

