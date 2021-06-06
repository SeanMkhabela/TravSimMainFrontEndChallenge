import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "close-btn"
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    className: "form-content-left"
  }, /*#__PURE__*/React.createElement("img", {
    className: "form-img",
    src: "img/WEMKH.png",
    alt: "mkhbydsgn"
  })), !isSubmitted ? /*#__PURE__*/React.createElement(FormSignup, {
    submitForm: submitForm
  }) : /*#__PURE__*/React.createElement(FormSuccess, null)));
};

export default Form;