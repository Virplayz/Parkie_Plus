document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var otpValue = document.getElementById('otp').value;
    // Here, you should validate the OTP, and if it's valid, show the alert box
    // For simplicity, let's assume the OTP is always valid
    document.getElementById('alertBox').style.display = 'block';
  
    // Redirect to another page after 3 seconds
    setTimeout(function() {
      window.location.href = 'newpage.html'; // Replace 'newpage.html' with the URL of the new page
    }, 3000);
  });
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('alertBox').style.display = 'none';
  });
  