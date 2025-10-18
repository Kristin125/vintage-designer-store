import React from "react";

const Contact = () => {
  return (
    <div className="page container contact-page">
      <h2 className="section-title">Contact Us</h2>
      <p className="lead">Have a question about an item? Send us a message.</p>

      <form className="contact-form" onSubmit={(e)=>{ e.preventDefault(); alert("Message sent — mock"); }}>
        <label>Full Name</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Message</label>
        <textarea rows="5" required />
        <button className="text-btn" type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

