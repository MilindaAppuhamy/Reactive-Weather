import React, { useState } from "react";

export default function Form(props) {
  const { setLocation } = props;
  const [typedLocation, setTypedLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(typedLocation);
    setTypedLocation("");
  }

  return (
    <div className="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="city">
          City:
          <input
            type="text"
            value={typedLocation}
            onChange={(e) => setTypedLocation(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
