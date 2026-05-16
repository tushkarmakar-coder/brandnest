import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, company, service, message } = await req.json()

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
        // 1. Send notification to ADMIN
        const adminResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'BrandNest <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'hello@brandnest.in',
            subject: `🚀 New Lead: ${name} — ${service || 'General Inquiry'}`,
            html: `
              <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #111111; color: #F5F5F5;">
                <div style="background: #111111; padding: 24px 28px; border-bottom: 2px solid #FF5C00;">
                  <h2 style="color: #FF5C00; margin: 0; font-size: 22px; font-weight: bold;">🚀 New Inquiry for BrandNest</h2>
                  <p style="color: rgba(245,245,245,0.5); margin: 6px 0 0; font-size: 12px;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
                <div style="padding: 28px; background: #111111;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600; width: 120px;">Full Name</td><td style="padding: 12px 0; color: #F5F5F5; font-weight: 500;">${name}</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600;">Phone</td><td style="padding: 12px 0;"><a href="tel:${phone}" style="color: #FF5C00; text-decoration: none; font-weight: 500;">${phone}</a></td></tr>
                    ${email ? `<tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600;">Email</td><td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #FF5C00; text-decoration: none; font-weight: 500;">${email}</a></td></tr>` : ''}
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600;">Company</td><td style="padding: 12px 0; color: #F5F5F5;">${company || 'Not specified'}</td></tr>
                    <tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600;">Service</td><td style="padding: 12px 0;"><span style="background: rgba(255,92,0,0.15); color: #FF7A2E; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600;">${service || 'Not specified'}</span></td></tr>
                    ${message ? `<tr style="border-bottom: 1px solid rgba(255,92,0,0.1);"><td style="padding: 12px 0; color: rgba(245,245,245,0.6); font-weight: 600; vertical-align: top;">Message</td><td style="padding: 12px 0; color: #F5F5F5; line-height: 1.6;">${message}</td></tr>` : ''}
                  </table>
                </div>
                <div style="background: #1A1A1A; padding: 16px 28px; text-align: center; border-top: 1px solid rgba(255,92,0,0.1);">
                  <p style="margin: 0; color: rgba(245,245,245,0.4); font-size: 11px;">Developed by Brandnest — India's First AI Powered Digital Agency</p>
                </div>
              </div>
            `
          })
        })

        if (adminResponse.ok) emailSent = true

        // 2. Send "Thank You" to CLIENT (User)
        if (email) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'BrandNest <onboarding@resend.dev>',
              to: email,
              subject: `Thank you for reaching out to BrandNest!`,
              html: `
                <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background: #111111; color: #F5F5F5; border: 1px solid rgba(255,92,0,0.15);">
                  <div style="padding: 40px 30px; text-align: center; background: linear-gradient(180deg, rgba(255,92,0,0.05) 0%, transparent 100%);">
                    <div style="margin-bottom: 24px; color: #FF5C00; font-size: 40px;">✓</div>
                    <h1 style="color: #F5F5F5; margin: 0 0 10px; font-size: 24px; font-weight: 800; letter-spacing: -0.02em;">We've Received Your Request!</h1>
                    <p style="color: rgba(245,245,245,0.6); margin: 0; font-size: 14px; line-height: 1.6;">Hi ${name}, thank you for choosing BrandNest. Our team is reviewing your requirements for <strong>${service || 'your project'}</strong>.</p>
                  </div>
                  
                  <div style="padding: 0 30px 40px;">
                    <div style="background: rgba(255,92,0,0.05); border: 1px border(255,92,0,0.1); padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                      <p style="margin: 0 0 10px; color: #FF7A2E; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Next Steps</p>
                      <p style="margin: 0; color: rgba(245,245,245,0.8); font-size: 13px; line-height: 1.6;">A specialist will call you at <strong>${phone}</strong> within the next 2 hours to discuss the timeline and strategy. We can't wait to build something remarkable with you.</p>
                    </div>

                    <div style="text-align: center;">
                      <p style="color: rgba(245,245,245,0.4); font-size: 13px; margin-bottom: 20px;">Need an instant response?</p>
                      <a href="https://wa.me/917894935653?text=Hi, I just filled out the inquiry form." style="display: inline-block; background: #25D366; color: #FFFFFF; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">Message us on WhatsApp</a>
                    </div>
                  </div>

                  <div style="background: #1A1A1A; padding: 20px 30px; text-align: center; border-top: 1px solid rgba(255,92,0,0.1);">
                    <p style="margin: 0 0 4px; color: #FF5C00; font-weight: 700; font-size: 12px;">BrandNest Digital Agency</p>
                    <p style="margin: 0; color: rgba(245,245,245,0.3); font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Developed by Brandnest — India's First AI Powered Digital Agency</p>
                    <p style="margin: 10px 0 0; color: rgba(245,245,245,0.2); font-size: 9px;">Noida Extension Sec-16B, India • 201308</p>
                  </div>
                </div>
              `
            })
          })
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Request received! We will call you within 2 hours. Check your email for confirmation.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please WhatsApp us directly.' },
      { status: 500 }
    )
  }
}
