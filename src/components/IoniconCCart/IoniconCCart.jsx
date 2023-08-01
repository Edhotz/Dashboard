/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IoniconCCart = ({
  className,
  ioniconCCart = "https://generation-sessions.s3.amazonaws.com/bb7d47d66e623e173a54fcb164292792/img/ionicon-c-cart-default-2.svg",
}) => {
  return <img className={`ionicon-c-cart ${className}`} alt="Ionicon c cart" src={ioniconCCart} />;
};

IoniconCCart.propTypes = {
  ioniconCCart: PropTypes.string,
};
