import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, company, service, message } = await req.json()

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    let emailSent = false

    // Send via Resend email API
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'BrandNest <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'hello@brandnest.in',
            subject: `New Inquiry for BrandNest — ${name}`,
            html: `
              <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #111111;">
                <div style="background: #111111; padding: 24px 28px; border-bottom: 2px solid #FF5C00;">
                  <h2 style="color: #FF5C00; margin: 0; font-size: 22px; font-weight: bold;">🚀 New Inquiry for BrandNest</h2>
                  <p style="color: rgba(245,245,245,0.5); margin: 6px 0 0; font-size: 12px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
                <div style="padding: 28px; background: #111111;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600; width: 120px;">Full Name</td><td style="padding: 12px 0; color: #F5F5F5; font-weight: 500;">${name}</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600;">Phone</td><td style="padding: 12px 0;"><a href="tel:${phone}" style="color: #FF5C00; text-decoration: none; font-weight: 500;">${phone}</a></td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600;">Company</td><td style="padding: 12px 0; color: #F5F5F5;">${company || 'Not specified'}</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600;">Service</td><td style="padding: 12px 0;"><span style="background: rgba(255,92,0,0.15); color: #FF7A2E; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600;">${service || 'Not specified'}</span></td></tr>
                    ${message ? `<tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600; vertical-align: top;">Message</td><td style="padding: 12px 0; color: #F5F5F5; line-height: 1.6;">${message}</td></tr>` : ''}
                  </table>
                </div>
                <div style="background: #1A1A1A; padding: 16px 28px; text-align: center; border-top: 1px solid rgba(255,92,0,0.1);">
                  <p style="margin: 0; color: rgba(245,245,245,0.4); font-size: 11px;">BrandNest — AI-Powered Digital Agency</p>
                </div>
              </div>
            `
          })
        })

        if (response.ok) {
          emailSent = true
        } else {
          const error = await response.text()
          console.error('Resend API error:', error)
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
      }
    }

    // Console log for backup
    console.log('📬 New Lead Received:', {
      name,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
      emailSent
    })

    // Send WhatsApp notification to admin
    const whatsappMessage = `🚀 *New Inquiry - BrandNest*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Company:* ${company || 'N/A'}\n*Service:* ${service || 'N/A'}\n*Message:* ${message || 'N/A'}`
    
    if (process.env.NEXT_PUBLIC_WHATSAPP) {
      // Note: WhatsApp API would go here if you have Twilio or similar
      console.log('WhatsApp would be sent to:', process.env.NEXT_PUBLIC_WHATSAPP)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Request received! We will call you within 2 hours. You can also message us on WhatsApp for instant response.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please WhatsApp us directly.' },
      { status: 500 }
    )
  }
}
