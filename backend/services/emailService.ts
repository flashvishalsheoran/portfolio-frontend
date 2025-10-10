import nodemailer from 'nodemailer';
import { AppointmentData } from '../types/appointment';

/**
 * Email Service using SMTP
 * Sends concise appointment notifications via email using your SMTP server
 */

// Create SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.soahealthcare.net',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for 465 (SSL)
  auth: {
    user: process.env.SMTP_USER || 'no-reply@soahealthcare.net',
    pass: process.env.SMTP_PASS || '!J@ZpI.4AO[w',
  },
  tls: {
    rejectUnauthorized: false // Accept self-signed certificates
  }
});

/**
 * Send appointment notification via SMTP
 * @param data - Appointment form data
 * @returns Promise with success status
 */
export const sendAppointmentEmail = async (data: AppointmentData) => {
  try {
    const formattedPurpose = data.purpose
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const mailOptions = {
      from: `"SOA Healthcare" <${process.env.SMTP_FROM || 'no-reply@soahealthcare.net'}>`,
      to: 'admin@soahealthcare.net',
      subject: `New Appointment: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background: linear-gradient(135deg, #0073e6, #005bb3); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h2 style="margin: 0; font-size: 22px;">🏥 New Appointment</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">SOA Healthcare</p>
          </div>
          <div style="background: white; padding: 20px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; background: #f5f7fa; border-left: 3px solid #0073e6; margin-bottom: 10px;">
                  <strong style="color: #0073e6; font-size: 12px; text-transform: uppercase;">Name</strong><br>
                  <span style="font-size: 16px; color: #333;">${data.name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f5f7fa; border-left: 3px solid #0073e6; margin-bottom: 10px;">
                  <strong style="color: #0073e6; font-size: 12px; text-transform: uppercase;">Phone</strong><br>
                  <a href="tel:${data.phone}" style="font-size: 16px; color: #0073e6; text-decoration: none;">${data.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; background: #f5f7fa; border-left: 3px solid #0073e6; margin-bottom: 10px;">
                  <strong style="color: #0073e6; font-size: 12px; text-transform: uppercase;">Purpose</strong><br>
                  <span style="font-size: 16px; color: #333;">${formattedPurpose}</span>
                </td>
              </tr>
              ${data.message ? `
              <tr>
                <td style="padding: 10px; background: #f5f7fa; border-left: 3px solid #0073e6; margin-bottom: 10px;">
                  <strong style="color: #0073e6; font-size: 12px; text-transform: uppercase;">Message</strong><br>
                  <span style="font-size: 16px; color: #333;">${data.message}</span>
                </td>
              </tr>
              ` : ''}
            </table>
            <p style="font-size: 12px; color: #777; text-align: center; margin-top: 20px;">
              Please contact the patient within 24 hours to confirm the consultation.
            </p>
            <p style="font-size: 12px; color: #777; text-align: center; margin-top: 5px;">
              Appointment booked on: ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
            </p>
          </div>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Appointment email sent via SMTP');
    console.log('📧 To: admin@soahealthcare.net');
    console.log('👤 Patient:', data.name);
    console.log('📧 Message ID:', result.messageId);
    
    return { success: true };
  } catch (error: any) {
    console.error('❌ SMTP Error:', error.message);
    
    // Log to console as fallback
    console.log('\n' + '='.repeat(60));
    console.log('📧 APPOINTMENT REQUEST (Email failed - logged to console)');
    console.log('='.repeat(60));
    console.log(`👤 Name: ${data.name}`);
    console.log(`📞 Phone: ${data.phone}`);
    console.log(`💼 Purpose: ${data.purpose}`);
    if (data.message) console.log(`💬 Message: ${data.message}`);
    console.log(`⏰ Time: ${new Date().toLocaleString()}`);
    console.log('='.repeat(60));
    
    throw new Error(`Failed to send email: ${error.message}`);
  }
};