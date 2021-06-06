import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({
  submitForm
}) => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useForm(submitForm, validate);
  return /*#__PURE__*/React.createElement("div", {
    className: "form-content-right"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "form",
    noValidate: true
  }, /*#__PURE__*/React.createElement("h1", null, "Get started with us today! Create your account by filling out the information below."), /*#__PURE__*/React.createElement("div", {
    className: "form-inputs"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Username"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    type: "text",
    name: "username",
    placeholder: "Enter your username",
    value: values.username,
    onChange: handleChange
  }), errors.username && /*#__PURE__*/React.createElement("p", null, errors.username)), /*#__PURE__*/React.createElement("div", {
    className: "form-inputs"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    value: values.email,
    onChange: handleChange
  }), errors.email && /*#__PURE__*/React.createElement("p", null, errors.email)), /*#__PURE__*/React.createElement("div", {
    className: "form-inputs"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    value: values.password,
    onChange: handleChange
  }), errors.password && /*#__PURE__*/React.createElement("p", null, errors.password)), /*#__PURE__*/React.createElement("div", {
    className: "form-inputs"
  }, /*#__PURE__*/React.createElement("label", {
    className: "form-label"
  }, "Confirm Password"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    type: "password",
    name: "password2",
    placeholder: "Confirm your password",
    value: values.password2,
    onChange: handleChange
  }), errors.password2 && /*#__PURE__*/React.createElement("p", null, errors.password2)), /*#__PURE__*/React.createElement("button", {
    className: "form-input-btn",
    type: "submit"
  }, "Sign up"), /*#__PURE__*/React.createElement("span", {
    className: "form-input-login"
  }, "Already have an account? Login ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "here"))));
};

export default FormSignup;