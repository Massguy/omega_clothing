import React from "react";
import './FormInputStyle.scss'
const FormInput = ({ handleChange, label, ...otherPropsValues }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherPropsValues}
      />
      {label ? (
        <label
          className={`${
            otherPropsValues.value.length ? "shrink" : ""
          } form-input-label`}
        >{label}</label>
      ) : null}
    </div>
  );
};

export default FormInput;
