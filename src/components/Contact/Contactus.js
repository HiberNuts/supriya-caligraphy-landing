import React from "react";
import "./Contactus.css";
const Contactus = () => {
  return (
    <div className="contactus">
      <h3>Intrested in my art?</h3>
      <p>Let's Talk</p>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter you'r name" />
        <label>Email</label>
        <input type="text" placeholder="Enter you'r Email" />
        <label>Number</label>
        <input type="text" placeholder="Enter you'r phone number" />
        <label>Message</label>
        <input className="message" type="text" placeholder="Type your message here" />
        <button className="btn animate__slow animate__animated animate__jello animate__infinite" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contactus;
