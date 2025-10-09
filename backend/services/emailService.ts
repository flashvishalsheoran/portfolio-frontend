import { AppointmentData } from '../types/appointment'

/**
 * Email Service - Logs appointment data to console
 * Replace with actual email service when ready (Resend, SendGrid, etc.)
 */

/**
 * Send appointment confirmation email
 * Currently logs to console - integrate with email service when ready
 * @param data - Appointment form data
 * @returns Promise with success status
 */
export async function sendAppointmentEmail(data: AppointmentData): Promise<{ success: boolean; error?: string }> {
  try {
    // Format the consultation purpose for better readability
    const formatPurpose = (purpose: string): string => {
      return purpose
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    const timestamp = new Date().toLocaleString('en-US', { 
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'long'
    })

    // Log appointment details to console
    console.log('\n' + '='.repeat(80))
    console.log('📧 NEW APPOINTMENT REQUEST - SOA HEALTHCARE')
    console.log('='.repeat(80))
    console.log('\n👤 PATIENT INFORMATION:')
    console.log(`   Name: ${data.name}`)
    console.log(`   Phone: ${data.phone}`)
    console.log(`   Purpose: ${formatPurpose(data.purpose)}`)
    console.log('\n💬 MESSAGE:')
    console.log(`   ${data.message || 'No additional information provided'}`)
    console.log('\n⏰ TIMESTAMP:')
    console.log(`   ${timestamp}`)
    console.log('\n📩 EMAIL DESTINATION:')
    console.log(`   To: soahealthcare24@gmail.com`)
    console.log('\n' + '='.repeat(80))
    console.log('✅ Appointment logged successfully!')
    console.log('⚠️  NOTE: Email service not configured - details logged to console')
    console.log('='.repeat(80) + '\n')

    // You can integrate actual email service here later
    // For now, we're just logging to console
    
    return { success: true }
  } catch (error) {
    console.error('❌ Error processing appointment:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}

/**
 * Format email content for future email integration
 * @param data - Appointment data
 * @returns Formatted email content
 */
export function formatEmailContent(data: AppointmentData): { html: string; text: string } {
  const formatPurpose = (purpose: string): string => {
    return purpose
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const timestamp = new Date().toLocaleString('en-US', { 
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'long'
  })

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .header {
          background: linear-gradient(135deg, #0073e6 0%, #005bb3 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          border-radius: 10px 10px 0 0;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
        }
        .header p {
          margin: 10px 0 0 0;
          font-size: 16px;
          opacity: 0.9;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .intro {
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
          text-align: center;
        }
        .field {
          margin-bottom: 20px;
          padding: 18px;
          background-color: #f5f7fa;
          border-left: 4px solid #0073e6;
          border-radius: 5px;
        }
        .field-label {
          font-weight: 600;
          color: #0073e6;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .field-value {
          font-size: 16px;
          color: #333;
          word-wrap: break-word;
        }
        .field-value a {
          color: #0073e6;
          text-decoration: none;
          font-weight: 500;
        }
        .action-box {
          margin-top: 30px;
          padding: 25px;
          background: linear-gradient(135deg, #e6f2ff 0%, #f0f7ff 100%);
          border-radius: 8px;
          text-align: center;
          border: 1px solid #b3d9ff;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 12px;
          color: #999;
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏥 New Appointment Request</h1>
          <p>SOA Healthcare Consultation</p>
        </div>
        <div class="content">
          <p class="intro">
            You have received a new appointment request. Please review the details below.
          </p>

          <div class="field">
            <div class="field-label">Patient Name</div>
            <div class="field-value">${data.name}</div>
          </div>

          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">
              <a href="tel:${data.phone.replace(/\s/g, '')}">${data.phone}</a>
            </div>
          </div>

          <div class="field">
            <div class="field-label">Consultation Purpose</div>
            <div class="field-value">${formatPurpose(data.purpose)}</div>
          </div>

          <div class="field">
            <div class="field-label">Additional Information</div>
            <div class="field-value">${data.message || 'No additional information provided'}</div>
          </div>

          <div class="action-box">
            <p style="margin: 0; font-weight: 600; color: #0073e6; font-size: 18px;">⏰ Action Required</p>
            <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;">
              Please contact the patient within 24 hours to schedule their consultation.
            </p>
          </div>
        </div>
        <div class="footer">
          <p>📧 SOA Healthcare Appointment System</p>
          <p>🕐 ${timestamp}</p>
          <p style="margin-top: 15px; font-size: 11px; color: #aaa;">
            SOA Healthcare | Logistics & Consulting<br>
            📞 +1 (857) 565-6557 | 📧 soahealthcare24@gmail.com
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
SOA HEALTHCARE - NEW APPOINTMENT REQUEST

Patient Name: ${data.name}
Phone Number: ${data.phone}
Consultation Purpose: ${formatPurpose(data.purpose)}

Additional Information:
${data.message || 'No additional information provided'}

⏰ ACTION REQUIRED
Please contact the patient within 24 hours to schedule their consultation.

Timestamp: ${timestamp}

---
SOA Healthcare | Logistics & Consulting
Phone: +1 (857) 565-6557
Email: soahealthcare24@gmail.com
  `

  return { html, text }
}

/**
 * Verify email service configuration
 * @returns Promise with verification status
 */
export async function verifyEmailService(): Promise<boolean> {
  console.log('ℹ️  Email service running in console-only mode')
  console.log('ℹ️  Appointment details will be logged to console')
  return true
}
