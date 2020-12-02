import React, { useState } from "react";
import visibility from "./visibility.svg";

export default function Input({ type, name, value, placeholder, onChange, small, error, label }) {
  const [state, setState] = useState(false);

  function toggleVisibility() {
    setState(state ? false : true);
  }

  return (
    <div className={`input-holder ${small ? "input-holder--small" : ""} ${error !== "" ? "input-holder--error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      {type === "input" ? (
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
        />
      ) : type === "password" ? (
        <>
          <input
            type={state ? "text" : "password"}
            name={name}
            id={name}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(name, e.target.value)}
          />
          <img src={visibility} alt="visibility" onClick={toggleVisibility} />
        </>
      ) : (
        ""
      )}
      <span>{error}</span>
    </div>
  );
}
