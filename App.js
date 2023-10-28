import React, { useState } from "react";
import Location from "./components/Location";
import Form from "./components/Form";

function App() {
  const [location, setLocation] = useState("London");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Form setLocation={setLocation} />
          <Location location={location} />
        </div>
      </div>
    </>
  );
}

export default App;
