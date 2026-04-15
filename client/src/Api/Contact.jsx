import { useState } from "react";
// import { sendContact } from "../Api/ContactApi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendContact(form);
    alert("Message Sent!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
      <textarea placeholder="Message" onChange={e => setForm({...form, message: e.target.value})}/>
      <button type="submit">Send</button>
    </form>
  );
}