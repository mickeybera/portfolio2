const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path=require('path');

dotenv.config(); // Load environment variables from .env

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

// POST route for sending emails
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Load from .env
        pass: process.env.GMAIL_PASS // Load from .env
      }
    });

    // Mail options
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER, // Send to your email
      subject: `Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email: ", error.message);
    res.status(500).send("Failed to send email.");
  }
});
// --------------code for deployment--------------//
if(process.env.NODE_ENV=== "production"){
  const dirPath=path.resolve();

  app.use(express.static("./frontend/dist"));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(dirPath,"./frontend/dist","index.html"));
  })
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
