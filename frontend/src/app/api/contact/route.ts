// src/pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = req.body

    // Configure the transporter with environment variables for security
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    try {
      // Send an email to the admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'arijit.biswas@crackadmission.com',
        subject: `New Consultation Request from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Subject: ${subject}
          Message: ${message}
        `,
      })

      // Send a confirmation email to the sender
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for reaching out to CrackAdmission',
        text: `Dear ${name},\n\nThank you for contacting us. We have received your consultation request. Our team will reach out to you shortly. Please feel free to reply to this email if you have further questions.\n\nBest regards,\nThe CrackAdmission Team`,
      })

      res.status(200).json({ message: 'Emails sent successfully' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ error: 'Failed to send emails' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
