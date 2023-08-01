/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ProgressBarInfo = ({
  className,
  elementClassName,
  text = "60%",
  progressBarClassName,
  barOnClassName,
}) => {
  return (
    <div className={`progress-bar-info ${className}`}>
      <div className={`text-wrapper ${elementClassName}`}>{text}</div>
      <div className={`bar-on-wrapper ${progressBarClassName}`}>
        <div className={`div ${barOnClassName}`} />
      </div>
    </div>
  );
};

ProgressBarInfo.propTypes = {
  text: PropTypes.string,
};
