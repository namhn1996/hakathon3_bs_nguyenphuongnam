import React from "react";

function ContactInfo({ state }) {
  console.log(state);
  return (
    <div className="contact-info col-3 ">
      <h1>Contact Info</h1>
      <ul className="contact-info-ul">

        {
        (state.render) ? (
          <>
            {" "}
            <li>
              <p>Name</p>
              <p>{state.name}</p>
              <hr />
            </li>
            <li>
              <p>Email</p>
              <p>{state.email}</p>
              <hr />
            </li>
            <li>
              <p>Phone Number</p>
              <p>{state.phone}</p>
              <hr />
            </li>
            <li>
              <p>Message</p>
              <p>{state.message}</p>
              <hr />
            </li>
          </>
        ) : (
          <>
            {" "}
            <li>
              <p>Name</p>
              <p>?</p>
              <hr />
            </li>
            <li>
              <p>Email</p>
              <p>?</p>
              <hr />
            </li>
            <li>
              <p>Phone Number</p>
              <p>?</p>
              <hr />
            </li>
            <li>
              <p>Message</p>
              <p>?</p>
              <hr />
            </li>
          </>
        )}
      </ul>
      <div>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </div>
  );
}

export default ContactInfo;
