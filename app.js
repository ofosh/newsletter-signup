const errorValue = document.getElementById("error");
const goodValue = document.querySelector(".good");
const contentBox1 = document.querySelector(".content-box");
const contentBox2 = document.querySelector(".content-box2");
const form = document.querySelector("form");
const dismissBtn = document.querySelector(".dismiss-btn");
const inputBtn = document.querySelector(".input-btn");
const emailName = document.querySelector(".email-name");

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if(email.length == 0) {
    errorValue.innerHTML = 'field is required'
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorValue.innerHTML = 'Enter Email address';
    return  false
  }
  goodValue.innerHTML = 'Good'
  goodValue.style.color = 'seagreen'
  inputBtn.style.borderColor = 'seagreen'
  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(validateEmail() == 0) {
    errorValue.innerHTML = 'Enter Email'
  }
  else {
    contentBox1.classList.add("hide");
    contentBox2.classList.remove("hide");
  }
  goodValue.innerHTML = ''
  emailName.innerText = inputBtn.value
  inputBtn.style.borderColor = 'hsl(231, 7%, 60%)'
})

