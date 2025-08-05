const { Resend } = require('resend');

module.exports = async function (context, req) {
    context.log('Send email function processed a request.');

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        context.res = {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        };
        return;
    }

    // Initialize Resend with API key from environment variables
    const apiKey = process.env.RESEND_API_KEY;
    context.log('RESEND_API_KEY loaded:', apiKey ? 'Yes' : 'No');
    
    if (!apiKey) {
        context.res = {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
                error: 'RESEND_API_KEY environment variable is not set'
            })
        };
        return;
    }
    
    const resend = new Resend(apiKey);

    if (req.method === 'POST') {
        try {
            // Extract form data from request body
            const { name, email, company, message } = req.body;

            // Validate required fields
            if (!name || !email || !message) {
                context.res = {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({
                        error: 'Missing required fields: name, email, and message are required'
                    })
                };
                return;
            }

            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                context.res = {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({
                        error: 'Invalid email address format'
                    })
                };
                return;
            }

            // Create email content
            const subject = `Contact Request from ${name}`;
            const htmlContent = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
                        ${req.body.phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${req.body.phone}</p>` : ''}
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                        <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
                            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                        <p>This message was sent from your website contact form on ${new Date().toLocaleString()}.</p>
                    </div>
                </div>
            `;

            const textContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${req.body.phone ? `Phone: ${req.body.phone}\n` : ''}
${company ? `Company: ${company}\n` : ''}Message:
${message}

Sent on: ${new Date().toLocaleString()}
            `;

            // Send email using Resend
            const data = await resend.emails.send({
                from: process.env.FROM_EMAIL || 'noreply@sociofi.io', // Use environment variable for from email
                to: 'contacts@fabricxai.com', // || 'info@fabricxai.com', // Send to configured email or fallback
                subject: subject,
                html: htmlContent,
                text: textContent,
                replyTo: email // Allow replies to go directly to the person who submitted the form
            });

            context.res = {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({
                    message: 'Email sent successfully',
                    data: data
                })
            };

        } catch (error) {
            context.log.error('Error sending email:', error);
            
            // Check if it's an authentication error with Resend
            let errorMessage = 'Failed to send email';
            if (error.message && error.message.includes('API key')) {
                errorMessage = 'Email service configuration error. Please check API key.';
            } else if (error.message && error.message.includes('Invalid')) {
                errorMessage = 'Invalid email configuration';
            }
            
            context.res = {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: JSON.stringify({
                    error: errorMessage,
                    details: error.message || 'Unknown error occurred',
                    timestamp: new Date().toISOString()
                })
            };
        }
    } else {
        // Handle GET requests or other methods
        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
                message: 'Send email function is running. Use POST method to send emails.'
            })
        };
    }
};
