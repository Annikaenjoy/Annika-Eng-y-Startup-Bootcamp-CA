import React from "react";

const ContactMe = (props) => {
  return (
    <>
      <div className="heading_container">
        <h1>Contact</h1>
        <h2>me</h2>
      </div>
      <div className="contact_box">
        <form>
          <input
            className="form_input"
            type="text"
            id="name"
            value="Name"
          ></input>
          <input
            className="form_input"
            type="text"
            id="email"
            value="Email"
          ></input>
          <input
            className="form_input"
            type="text"
            id="message"
            name="message"
          ></input>
          <div className="form-button" type="submit" value="Submit">
            Send message
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactMe;