const { Resend } = require('resend');

module.exports = async function (context, req) {
    context.log('Demo request function processed a request.');

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
            const { name, email, company, phone, engagement_type, message } = req.body;

            // Validate required fields
            if (!name || !email || !company || !message) {
                context.res = {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({
                        error: 'Missing required fields: name, email, company, and message are required'
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

            // Create email content for demo request
            const subject = `Product Demo Request from ${name} - ${company}`;
            const htmlContent = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Demo Request</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>
                        ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
                        ${engagement_type ? `<p style="margin: 10px 0;"><strong>How did they hear about us:</strong> ${engagement_type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>` : ''}
                    </div>
                    
                    <div style="margin: 20px 0;">
                        <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                        <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px;">
                            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                        <p>This demo request was submitted from your website on ${new Date().toLocaleString()}.</p>
                        <p style="margin: 5px 0;"><strong>Request Type:</strong> Product Demo</p>
                    </div>
                </div>
            `;

            const textContent = `
New Demo Request

Name: ${name}
Email: ${email}
Company: ${company}
${phone ? `Phone: ${phone}\n` : ''}${engagement_type ? `How did they hear about us: ${engagement_type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}\n` : ''}
Message:
${message}

Submitted on: ${new Date().toLocaleString()}
Request Type: Product Demo
            `;

            // Send email using Resend
            const data = await resend.emails.send({
                from: process.env.FROM_EMAIL || 'noreply@sociofi.io',
                to: process.env.TO_EMAIL || 'info@fabricxai.com', // Send demo requests to noreply@sociofi.io as requested
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
                    message: 'Demo request sent successfully',
                    data: data
                })
            };

        } catch (error) {
            context.log.error('Error sending demo request:', error);
            
            // Check if it's an authentication error with Resend
            let errorMessage = 'Failed to send demo request';
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
                message: 'Demo request function is running. Use POST method to request demos.'
            })
        };
    }
};
