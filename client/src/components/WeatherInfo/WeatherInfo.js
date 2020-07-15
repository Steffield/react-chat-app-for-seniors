import React from "react";
import "./WeatherInfo.scss";

const WeatherInfo = () => {
  return (
    <>
      <h3 className="weatherUpdate">
        The current temperature in x is x{" "}
        <img src="https://placehold.it/20x20" />
      </h3>
    </>
  );
};

export default WeatherInfo;
