const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/contact', (req, res) => {
  res.render('contact', { message: null, error: null });
});

app.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return res.render('contact', { message: null, error: 'Please fill in all fields.' });
  }

  // Create transporter (Test version - no real email sent)
  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'ethereal.user@ethereal.email',
      pass: 'ethereal.pass'
    }
  });
  
  // For Gmail, use:
  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'omdpatel2109@gmail.com',
  //     pass: 'your_16_character_app_password'
  //   }
  // });

  // Mail options
  let mailOptions = {
    from: 'omdpatel2109@gmail.com',
    to: '23cs071@charusat.edu.in',
    replyTo: email,
    subject: subject,
    text: `Message from: ${name}\nEmail: ${email}\n\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.render('contact', { message: 'Message sent successfully!', error: null });
  } catch (err) {
    console.error(err);
    res.render('contact', { message: null, error: 'Failed to send message. Try again later.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/contact`);
});
