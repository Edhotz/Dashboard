/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProgressBarWarning = ({
  className,
  elementClassName,
  text = "60%",
  progressBarClassName,
  barOnClassName,
}) => {
  return (
    <div className={`progress-bar-warning ${className}`}>
      <div className={`element ${elementClassName}`}>{text}</div>
      <div className={`progress-bar ${progressBarClassName}`}>
        <div className={`bar-on ${barOnClassName}`} />
      </div>
    </div>
  );
};

ProgressBarWarning.propTypes = {
  text: PropTypes.string,
};
