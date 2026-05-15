// Replace these values with yours from EmailJS dashboard
const EMAILJS_SERVICE_ID  = "service_8jkq77p";
const EMAILJS_TEMPLATE_ID = "template_sjzlgml";
const EMAILJS_PUBLIC_KEY  = "lgDrWaSIJ2fWQTgsr";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

let otp_val = null;

// Function to send OTP
function sendOTP() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    if (!email) {
        alert("Please enter an email address.");
        return;
    }

    otp_val = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
    console.log("Generated OTP:", otp_val);

    // IMPORTANT: variable names must match your EmailJS template
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: email,      // use 'to_email' if your template expects this
        otp_value: otp_val
    })
    .then(() => {
        alert("OTP sent to " + email);
        document.getElementsByClassName('otpverify')[0].style.display = "flex";
    })
    .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send OTP. Check console for details.");
    });
}

// Event listener for sending OTP
document.getElementById('send-otp-button').addEventListener('click', sendOTP);

// Event listener for verifying OTP
document.getElementById('otp-btn').addEventListener('click', () => {
    const otp_inp = document.getElementById('otp_inp').value.trim();

    if (!otp_val) {
        alert("Please send an OTP first.");
        return;
    }

    if (otp_inp === "") {
        alert("Please enter the OTP.");
        return;
    }

    console.log("Entered OTP:", otp_inp, "Expected OTP:", otp_val);

    if (parseInt(otp_inp, 10) === otp_val) {
        alert("Email address verified!");
        window.location.href = 'Payment.html';
    } else {
        alert("Invalid OTP. Try again.");
    }
});
