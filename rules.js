document.getElementById("agreeCheckbox").addEventListener("change", function() {
    var nextButton = document.getElementsByClassName("nextButton");
    if (this.checked) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
    // const btn_click = document.querySelector.getElementsByClassName("nextButton");
    // btn_click.addEventListener('click',()=>{
    //     window.location.href = 'nextpage.html';
    });
    // otp_btn.addEventListener('click', () => {
    //     // Check if entered OTP matches generated OTP
    //     if (otp_inp.value == otp_val) {
    //         // OTP verification successful
    //         alert("Email address verified...");

    //         // Navigate to next page (replace 'nextpage.html' with desired URL)
    //         window.location.href = 'nextpage.html';
    //     } else {
