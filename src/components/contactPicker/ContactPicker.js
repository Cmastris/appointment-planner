import React from "react";

export const ContactPicker = ({ contacts, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>Contact</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">No Contact Selected</option>
        {contacts.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
      </select>
    </div>
  );
};
