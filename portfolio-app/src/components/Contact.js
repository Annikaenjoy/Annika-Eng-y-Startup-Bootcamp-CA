import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";

// React Scroll
import { Element } from "react-scroll";

const ContactMe = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_422eql4",
      "template_w0pkmhc",
      toSend,
      "user_WY3bL8gaVmOVCMW56d01O"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Element name="contact"></Element>

      <div className="contact_container">
        <h1 className="contact_h1">Contact</h1>
        <h2 className="contact_h2">me</h2>
      </div>
      <div className="contact_box">
        {" "}
        <div className="form-container">
          <div id="messageField"></div>
          <form onSubmit={onSubmit}>
            <input
              className="form_input"
              type="text"
              id="name"
              name="from_name"
              required
              placeholder="Name"
              value={toSend.from_name}
              onChange={handleChange}
            ></input>
            {/* <div class="form-error" id="nameError">Please enter your name</div> */}

            <input
              className="form_input"
              type="text"
              id="email"
              name="reply_to"
              required
              placeholder="Email"
              value={toSend.reply_to}
              onChange={handleChange}
            ></input>
            {/* <div class="form-error" id="emailError">You must enter a valid email adress</div> */}

            <textarea
              className="form_input"
              type="text"
              id="message"
              name="message"
              required
              value={toSend.message}
              onChange={handleChange}
            ></textarea>
            <button
              className="form-button"
              type="submit"
              id="button"
              value="Submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactMe;

// This is how I would create the from validation in vanilla js.
//I was not quite sure how to do it combining it with EmailJS here, and not using document.querySelector as it is bad practice in React.

// const form = document.querySelector(".form-container")

// const name = document.querySelector("#name");
// const nameError = document.querySelector("#nameError");
// const email = document.querySelector("#email");
// const emailError = document.querySelector("#emailError");
// const message = document.querySelector("#message");
// const button = document.querySelector("#button");

// function checkIfValidForm() {
//   if (checkLength(name.value, 1)  && validateEmail(email.value) && checkLength(message.value, 3)) {
//       message.innerHTML = `Your form has successfully been submitted!`
//   } else {
//       message.innerHTML = `ERROR! Your form has not been filled in properly`;
//   }
// }

// button.addEventListener("click", checkIfValidForm);

// function validateForm(event) {
//   event.preventDefault();

//   if (checkLength(name.value, 0) === true) {
//       nameError.style.display = "none";
//   }
//   else {
//       nameError.style.display = "block";
//   }
//   if (validateEmail(email.value) === true) {
//       emailError.style.display = "none";
//   }
//   else {
//       emailError.style.display = "block";
//   }
//   if (checkLength(message.value, 3) === true) {
//       messageError.style.display = "none";
//   }
//   else {
//       messageError.style.display = "block";
//   }
//   console.dir("Check");

// }

// form.addEventListener("submit", validateForm);

// function checkLength(value, len) {
//   if (value.trim().length > len) {
//       return true;
//   }
//   else {
//       return false;
//   }
// }

// function validateEmail(email) {
//   const regEX = /\S+@\S+\.\S+/;
//   const patternMatches = regEX.test(email);
//   return patternMatches;
// }
