import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1> Weather App </h1>
      <button className="btn btn-primary"> Hello </button>
      <div className="container">
        <Weather />

        <footer>
          This project was coded by {" "}
          <a
            href="https://github.com/nellyobi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nelly Obi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/nellyobi/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://willowy-nougat-1d267a.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
