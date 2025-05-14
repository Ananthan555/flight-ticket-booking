const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your Gmail and app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anandawosome@gmail.com',       // <-- Your Gmail address here
    pass: 'zzwrqvqszbqvjsuc'           // <-- Your Gmail App Password here
  }
});

app.post('/send-email', async (req, res) => {
  const { to, subject, text, html } = req.body;
  try {
    await transporter.sendMail({
      from: '"GDC Airways" <anandawosome@gmail.com>',  // same as above
      to,
      subject,
      text,
      html
    });
    res.json({ success: true, message: 'Email sent!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.toString() });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Email server running on port ${PORT}`));
