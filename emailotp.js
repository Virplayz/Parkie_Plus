const EMAILJS_SERVICE_ID  = "service_8jkq77p";
const EMAILJS_TEMPLATE_ID = "template_sjzlgml";
const EMAILJS_PUBLIC_KEY  = "lgDrWaSIJ2fWQTgsr";

emailjs.init(EMAILJS_PUBLIC_KEY);

let otp_val = null;

function sendOTP() {
    const email = document.getElementById('email').value.trim();

    if (!email) {
        alert("Please enter an email address.");
        return;
    }

    otp_val = Math.floor(1000 + Math.random() * 9000); // 4-digit OTP

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        email: email,         // maps to {{email}} in template (To Email field)
        otp_value: otp_val    // maps to {{otp_value}} in template body
    })
    .then(() => {
        alert("OTP sent to " + email);
        document.querySelector('.otpverify').style.display = "flex";
    })
    .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send OTP. Error: " + JSON.stringify(error));
    });
}

document.getElementById('send-otp-button').addEventListener('click', sendOTP);

document.getElementById('otp-btn').addEventListener('click', () => {
    const otp_inp = document.getElementById('otp_inp');

    if (!otp_val) {
        alert("Please send an OTP first.");
        return;
    }

    if (parseInt(otp_inp.value) === otp_val) {
        alert("Email address verified!");
        window.location.href = 'Payment.html';
    } else {
        alert("Invalid OTP. Try again.");
    }
});