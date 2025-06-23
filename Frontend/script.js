// document.getElementById('sendOtpBtn').addEventListener('click', async () => {
//     const phone = document.getElementById('phone').value;
//     if (!phone) {
//         alert('Please enter your phone number.');
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:3000/send-otp', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ phone }),
//         });

//         const data = await response.json();
//         if (data.success) {
//             alert('OTP sent to your phone.');
//             document.getElementById('otpLabel').style.display = 'block';
//             document.getElementById('otp').style.display = 'block';
//             document.getElementById('verifyOtpBtn').style.display = 'block';
//         } else {
//             alert(data.error || 'Failed to send OTP.');
//         }
//     } catch (err) {
//         console.error(err);
//         alert('Error sending OTP.');
//     }
// });

// document.getElementById('verifyOtpBtn').addEventListener('click', async () => {
//     const phone = document.getElementById('phone').value;
//     const otp = document.getElementById('otp').value;

//     try {
//         const response = await fetch('http://localhost:3000/verify-otp', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ phone, otp }),
//         });

//         const data = await response.json();
//         if (data.success) {
//             alert('OTP verified successfully.');
//             document.getElementById('addToCartBtn').style.display = 'block';
//         } else {
//             alert(data.error || 'Invalid OTP.');
//         }
//     } catch (err) {
//         console.error(err);
//         alert('Error verifying OTP.');
//     }
// });


// script.js

// Function to handle OTP verification
// function verifyOTP() {
//     const otp = document.getElementById('otp').value;

//     // Send POST request to the backend API for OTP verification
//     fetch('http://localhost:5000/verify-otp', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ otp: otp })  // Sending the OTP in the request body
//     })
//     .then(response => response.json())  // Parse JSON response
//     .then(data => {
//         if (data.success) {
//             alert(data.message);
//             document.getElementById('otpForm').style.display = 'none';
//             document.getElementById('purchaseForm').style.display = 'block';
//         } else {
//             alert(data.message);
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred while verifying OTP');
//     });
// }




// const api_key =" WBjfFv4ldwQrmw5Pw62/rSGtPzX4Hfn+t+T8kTYNoSE="
// function sendotp(){
//     let mobileNumber = document.getElementById("mobile ").value
//     let url ="https://2factor.in/API/V1/${api_key}/SMS/:mobile_number/AUTOGEN";
//     //  // Validate phone number
//     //  if (!mobileNumber || !/^\+91\d{10}$/.test(mobileNumber)) {
//     //     alert("Please enter a valid phone number in the format +91xxxxxxxxxx.");
//     //     return;
    
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>{
//         alert("otp send sucessfully");
//         session_id= data["details"];
//             console.log(data);
        
//     })
//     .catch((err)=>{
//         alert("Error",err);
//     });
         

// }
// function verifyOTP(){  }

const api_key = "ce9cd243-a312-11ed-813b-0200cd936042"; // Replace with your actual API key

function sendOtp() {
    const mobileNumber = document.getElementById("Mobile").value; // Updated ID reference
    const url = "https://2factor.in/API/V1/${api_key}/SMS/:mobile_number/AUTOGEN";

    // Validate phone number
    if (!mobileNumber || !/^\+91\d{10}$/.test(mobileNumber)) {
        alert("Please enter a valid phone number in the format +91xxxxxxxxxx.");
        return;
    }

    // Send OTP API call
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api_key}`, // Optional, if your API requires it
        },
        body: JSON.stringify({
            phone: mobileNumber, // Payload to send to the API
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to send OTP. Please try again.");
            }
            return response.json();
        })
        .then((data) => {
            alert("OTP sent successfully!");
            console.log("Response:", data);

            // Show OTP input fields
            document.getElementById("otpLabel").style.display = "block";
            document.getElementById("otp").style.display = "block";
            document.getElementById("verifyOtpBtn").style.display = "block";
        })
        .catch((err) => {
            alert("Error: " + err.message);
            console.error(err);
        });
}

function verifyOtp() {
    const otp = document.getElementById("otp").value;
    const url = "https://2factor.in/API/V1/${api_key}/SMS/:mobile_number/AUTOGEN";
    if (!otp) {
        alert("Please enter the OTP.");
        return;
    }

    // Verify OTP API call
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api_key}`, // Optional, if your API requires it
        },
        body: JSON.stringify({
            otp: otp, // Payload to send to the API
        }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("OTP verification failed. Please try again.");
            }
            return response.json();
        })
        .then((data) => {
            alert("OTP verified successfully!");
            console.log("Response:", data);

            // Show "Add to Cart" button upon successful OTP verification
            document.getElementById("addToCartBtn").style.display = "block";
        })
        .catch((err) => {
            alert("Error: " + err.message);
            console.error(err);
        });
}

// Attach event listeners to buttons
document.getElementById("sendOtpBtn").addEventListener("click", sendOtp);
document.getElementById("verifyOtpBtn").addEventListener("click", verifyOtp);
