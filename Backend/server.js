// require('dotenv').config(); // Load environment variables

// const express = require('express');
// const bodyParser = require('body-parser');
// const twilio = require('twilio');

// const app = express();
// app.use(bodyParser.json());

// // Use environment variables
// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// const client = twilio(accountSid, authToken);

// app.post('/send-otp', (req, res) => {
//     const phone = req.body.phone;
//     const otp = Math.floor(1000 + Math.random() * 9000);

//     client.messages
//         .create({
//             body: `Your OTP is ${otp}`,
//             from: twilioPhoneNumber,
//             to: phone,
//         })
//         .then((message) => res.status(200).send({ success: true, messageSid: message.sid }))
//         .catch((error) => res.status(500).send({ success: false, error: error.message }));
// });

// app.listen(process.env.PORT || 3000, () => {
//     console.log(`Server is running on port ${process.env.PORT || 3000}`);
// });


// // require('dotenv').config();
// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const twilio = require('twilio');
// // const cors = require('cors');

// // const app = express();
// // const port = 5000;
// // app.use(bodyParser.json());
// // app.use(cors());


// // const otpStore = {}; // Temporary storage for OTPs
// // const accountSid = process.env.ACCOUNT_SID;
// // const authToken = process.env.AUTH_TOKEN;
// // const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
// // const client = twilio(accountSid, authToken);

// // // Send OTP
// // app.post('/send-otp', (req, res) => {
// //     const { phone } = req.body;
// //     if (!phone) return res.status(400).send({ success: false, error: 'Phone number is required.' });

// //     const otp = Math.floor(1000 + Math.random() * 9000);
// //     otpStore[phone] = otp;

// //     client.messages
// //         .create({
// //             body: `Your OTP is ${otp}`,
// //             from: twilioPhoneNumber,
// //             to: phone,
// //         })
// //         .then(() => res.send({ success: true }))
// //         .catch((err) => res.status(500).send({ success: false, error: err.message }));
// // });

// // // Verify OTP
// // app.post('/verify-otp', (req, res) => {
// //     const { phone, otp } = req.body;
// //     if (otpStore[phone] && otpStore[phone] == otp) {
// //         delete otpStore[phone]; // Clear OTP after successful verification
// //         res.send({ success: true });
// //     } else {
// //         res.status(400).send({ success: false, error: 'Invalid OTP.' });
// //     }
// // });

// // // Start Server
// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on http://localhost:${PORT}`);
// // });


// const axios = require('axios');

// // ... other code

// app.post('/send-otp', async (req, res) => {
//   const phoneNumber = req.body.phoneNumber;
//   const otp = generateOTP();

//   // Store the OTP in your database or session storage

//   try {
//     const response = await axios.post(
//       'https://360marketingservice.com/ApiDocument/ApiDocs#', // Replace with your provider's endpoint
//       {
//         // ... API parameters, including your credentials, phone number, and OTP
//       }
//     );

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     res.json({ success: false, error: 'OTP sending failed' });
//   }
// });

// app.post('/verify-otp', async (req, res) => {
//   const phoneNumber = req.body.phoneNumber;
//   const receivedOTP = req.body.otp;

//   // Retrieve the stored OTP from your database or session storage

//   if (receivedOTP === storedOTP) {
//     res.json({ success: true });
//   } else {
//     res.json({ success: false, error: 'Invalid OTP' });
//   }
// });


// require('dotenv').config(); // Load environment variables

// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios'); // For making HTTP requests

// const app = express();
// app.use(bodyParser.json());

// // Replace with the actual API endpoint URL from the documentation
// const otpApiUrl = '';

// // Placeholder for API key and auth token (replace with actual values)
// let apiKey = process.env.OTP_API_KEY;
// let authToken = process.env.OTP_API_AUTH_TOKEN;

// app.post('/send-otp', async (req, res) => {
//   const phone = req.body.phone;
//   const otp = Math.floor(1000 + Math.random() * 9000); // Generate random OTP

//   // Replace with the specific request parameters required by the API
//   const requestData = {
//     phone: phone,
//     otp: otp, // May not be needed depending on the API's functionality
//   };

//   // Add API key and auth token headers (replace placeholders with actual values)
//   const headers = {
//     'Authorization': `Bearer ${authToken}`, // Assuming Bearer token authentication
//     'X-API-Key': apiKey, // Assuming API key authentication
//   };

//   try {
//     const response = await axios.post(otpApiUrl, requestData, { headers });

//     if (response.status === 200) { // Assuming successful response code
//       res.status(200).send({ success: true });
//     } else {
//       console.error('Error sending OTP:', response.data);
//       res.status(500).send({ success: false, error: 'Failed to send OTP' });
//     }
//   } catch (error) {
//     console.error('Error sending OTP:', error);
//     res.status(500).send({ success: false, error: 'Failed to send OTP' });
//   }
// });

// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server is running on port ${process.env.PORT || 3000}`);
});