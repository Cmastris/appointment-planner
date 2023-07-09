import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        >
      </input>
      <label htmlFor="phone">Phone Number (Without Spaces)</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        pattern="^(?:\+44|0)[1-9]\d{8,9}$"  // UK numbers starting with '+44' or '0', without spaces/separators
        required
        >
      </input>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        >
      </input>
      <input type="submit"></input>
    </form>
  );
};
