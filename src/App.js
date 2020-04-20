import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import WorldTable from "./components/WorldTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <WorldTable />
    </div>
  );
}

export default App;
