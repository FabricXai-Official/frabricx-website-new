const { Resend } = require('resend');

module.exports = async function (context, req) {
    context.log('Newsletter subscription function processed a request.');

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
            // Extract email from request body
            const { email } = req.body;

            // Validate required fields
            if (!email) {
                context.res = {
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type'
                    },
                    body: JSON.stringify({
                        error: 'Email address is required'
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

            // Create email content for newsletter subscription notification
            const subject = `New Newsletter Subscription`;
            const htmlContent = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #333; border-bottom: 2px solid #f2f827; padding-bottom: 10px;">New Newsletter Subscription</h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Subscription Type:</strong> Monthly Insights Newsletter</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                        <p>This newsletter subscription was submitted from your website on ${new Date().toLocaleString()}.</p>
                        <p style="margin: 5px 0;"><strong>Source:</strong> FabricX Website - Insights & Stories Section</p>
                    </div>
                </div>
            `;

            const textContent = `
New Newsletter Subscription

Email: ${email}
Subscription Type: Monthly Insights Newsletter

Submitted on: ${new Date().toLocaleString()}
Source: FabricX Website - Insights & Stories Section
            `;

            // Send notification email using Resend
            const data = await resend.emails.send({
                from: process.env.FROM_EMAIL || 'noreply@sociofi.io',
                to: 'newsletter@fabricxai.com', // Send newsletter subscriptions to the same email
                subject: subject,
                html: htmlContent,
                text: textContent,
                replyTo: email // Allow replies to go directly to the subscriber
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
                    message: 'Newsletter subscription successful',
                    data: data
                })
            };

        } catch (error) {
            context.log.error('Error processing newsletter subscription:', error);
            
            // Check if it's an authentication error with Resend
            let errorMessage = 'Failed to process newsletter subscription';
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
        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: JSON.stringify({
                message: 'Newsletter subscription function is running. Use POST method to subscribe.'
            })
        };
    }
};

