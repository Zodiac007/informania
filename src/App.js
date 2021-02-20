import React from "react";
import Users from "./components/Users";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3 className="animate__animated animate__bounceInLeft animate__slow animate__delay-1s">
        Check Availability Status
      </h3>
      <Users />
    </div>
  );
}

export default App;
