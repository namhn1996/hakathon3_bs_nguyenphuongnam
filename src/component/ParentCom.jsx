import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function ParentCom() {
  const [state,SetState] = useState({
    name:'',
    email:'',
    phone:'',
    message:'',
    render:false
  })
  return (
    <div className="parent-com ">
      <ContactInfo state={state} SetState={SetState}/>
      <ContactForm state={state} SetState={SetState}/>
    </div>
  );
}

export default ParentCom;
