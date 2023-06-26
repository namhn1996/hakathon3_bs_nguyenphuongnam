import React, { useState } from "react";
import ContactInfo from "./ContactInfo";

function ContactForm({ state, SetState }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetState({
      ...state,
      [name]: e.target.value,
    });
  };
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      SetState({ ...state, render: true });
    } else {
      setErrors(validationErrors);
    }
  };
  const validate = () => {
    const validationErrors = {};
    if (!state.name) {
      errors.name = "Name is required";
    }
    if (!state.email) {
      errors.email = "Email is required";
    }
    if (!state.phone) {
      errors.phone = "Phone is required";
    }
    if (!state.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  return (
    <div className="contact-form col-9 ">
      <h1>Contact Us</h1>
      <hr />
      <form className="contact-form-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          onChange={(e) => handleChange(e)}
          className="input"
          type="text"
          name="name"
          id="name"
          value={state.name || ""}
        />{" "}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={(e) => handleChange(e)}
          className="input"
          type="text"
          name="email"
          id="email"
          value={state.email || ""}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          onChange={(e) => handleChange(e)}
          className="input"
          type="text"
          name="phone"
          id="phone"
          value={state.phone || ""}
        />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          onChange={(e) => handleChange(e)}
          style={{ width: "80%" }}
          cols="30"
          rows="10"
          name="message"
          id="message"
          value={state.message || ""}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
