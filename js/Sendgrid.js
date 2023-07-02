const apiKey="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";
//const fetch = require('node-fetch');

const senderEmail = 'cmamal5@gmail.com';
const recipientEmail = 'cmamal5@gmail.com';

const sendEmail = async () => {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: recipientEmail }]
          }
        ],
        from: { email: senderEmail },
        subject: 'Hello from SendGrid',
        content: [
          {
            type: 'text/plain',
            value: 'This is the content of the email.'
          }
        ]
      })
    });
  
    if (response.ok) {
      console.log('Email sent successfully');
    } else {
      console.error('Error sending email');
    }
  };
  
  sendEmail().catch(error => {
    console.error('Error sending email:', error);
  });
 
  
  
  
  
  




