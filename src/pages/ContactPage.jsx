import { useState } from "react";
import Contact from "../components/Contact";

function ContactPage() {
  const [name, setName] = useState("");

  return (
    <div className="page">
      <Contact />

      <div className="contact-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="live-preview">You entered: {name}</p>
      </div>
    </div>
  );
}

export default ContactPage;