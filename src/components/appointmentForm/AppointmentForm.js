import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Appointment Name</label>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        >
      </input>
      <ContactPicker
        contacts={contacts}
        name="contact"
        value={contact}
        onChange={e => setContact(e.target.value)}
      />
      <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        name="date"
        value={date}
        min={getTodayString()}
        onChange={e => setDate(e.target.value)}
        required
        >
      </input>
      <label htmlFor="time">Time</label>
      <input
        id="time"
        type="time"
        name="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        required
        >
      </input>
      <input type="submit"></input>
    </form>
  );
};
