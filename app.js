const email = document.querySelector(".email");
const form = document.querySelector(".form");
const emailMessage = document.querySelector(".empty-email-message");
const errorEmail = document.querySelector(".invalid-email-message");
const errorImg = document.querySelector(".email-error-img");

form.addEventListener("submit", (e) => {
  if (email.value) {
    const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email.value
    );
    if (regexMatch) {
      errorEmail.textContent = "";
    } else {
      e.preventDefault();
      errorEmail.textContent = "Please provide a valid email";
      emailMessage.textContent = "";

      const Img = document.createElement("Img");
      Img.src = "./images/icon-error.svg";
      errorImg.appendChild(Img);
    }
  } else {
    e.preventDefault();
    emailMessage.textContent = "You must type in an email";
    errorEmail.textContent = "";
  }
});
