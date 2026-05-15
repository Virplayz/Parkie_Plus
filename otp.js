const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const mobile = document.getElementById("mobile");
const expire = document.getElementById("expire");
const request = document.getElementById("request");
let OTP = "";
let expireInterval;

function generateOTPs() {
  OTP = ""; // reset OTP
  for (let i = 0; i < 4; i++) {
    OTP += Math.floor(Math.random() * 10);
  }

  alert("Your OTP is: " + OTP);

  // enable first input
  inputs.forEach((inp, i) => {
    inp.value = "";
    if (i === 0) inp.removeAttribute("disabled");
    else inp.setAttribute("disabled", true);
  });
  inputs[0].focus();

  // start expiry countdown
  expire.innerText = 10;
  clearInterval(expireInterval);
  expireInterval = setInterval(() => {
    expire.innerText--;
    if (expire.innerText == 0) {
      clearInterval(expireInterval);
      alert("OTP expired!");
      button.classList.remove("active");
    }
  }, 1000);
}

// input handling
inputs.forEach((input, index) => {
  input.addEventListener("keyup", e => {
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (nextInput && nextInput.hasAttribute("disabled") && input.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace" && prevInput) {
      input.value = "";
      input.setAttribute("disabled", true);
      prevInput.focus();
    }

    // activate button when all 4 digits entered
    const allFilled = Array.from(inputs).every(inp => inp.value !== "");
    if (allFilled) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

// mobile prompt
window.addEventListener("load", () => {
  let x = prompt("Please enter your mobile number");
  if (x) mobile.innerText = x;
  generateOTPs();
});

// verify button
button.addEventListener("click", () => {
  let verify = "";
  inputs.forEach(input => {
    verify += input.value;
  });

  if (verify === OTP) {
    alert("OTP Verified Successfully!");
  } else {
    alert("Incorrect OTP. Try again.");
  }
});

// request again link
request.addEventListener("click", () => {
  generateOTPs();
});
