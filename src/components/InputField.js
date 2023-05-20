import React from "react";
import styles from "../components/InputField.module.css";

const InputField = (props) => {
  const {
    label,
    inputName,
    value,
    type,
    changeHandler,
    error,
    focusHandler,
    touched,
  } = props;
  return (
    <div className={styles.fieldContainer}>
      <label>{label}</label>
      <input
        className={
          error && touched ? styles.inputFieldError : styles.inputField
        }
        type={type}
        name={inputName}
        value={value}
        onChange={(event) => changeHandler(event)}
        onFocus={(event) => focusHandler(event)}
      ></input>
      {error && touched ? <p className={styles.errorMessage}>{error}</p> : ""}
    </div>
  );
};

export default InputField;
