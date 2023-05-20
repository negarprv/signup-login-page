import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import styles from "../components/Signup.module.css";
import sideImage from "../images/sideImage.jpg";
import { validator } from "./validator";
import { notify } from "./toast";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const result = validator(data, "signup");
    setErrors(result);
    console.log(result);
  }, [data, touched]);

  const changeHandler = (event) => {
    const target = event.target;
    if (target.name === "isAccepted") {
      setData({ ...data, [target.name]: event.target.checked });
    } else setData({ ...data, [target.name]: event.target.value });
    console.log(data);
  };

  const focusHandler = (event) => {
    const target = event.target;
    setTouched({ ...touched, [target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      console.log(data);
      notify("You signed in successfully !", "success");
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("Invalid data !", "error");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.display}>
          <img
            className={styles.sideImage}
            alt="justice background"
            src={sideImage}
          />
        </div>
        <div className={styles.form}>
          <h2>Sign Up</h2>
          <p>The worst form of injustice is pretended justice. plato</p>

          <InputField
            label="Name"
            inputName="name"
            value={data.name}
            type="text"
            changeHandler={changeHandler}
            focusHandler={focusHandler}
            error={errors.name}
            touched={touched.name}
          />
          <InputField
            label="Email"
            inputName="email"
            value={data.email}
            type="text"
            changeHandler={changeHandler}
            focusHandler={focusHandler}
            error={errors.email}
            touched={touched.email}
          />
          <InputField
            label="Password"
            inputName="password"
            value={data.password}
            type="password"
            changeHandler={changeHandler}
            focusHandler={focusHandler}
            error={errors.password}
            touched={touched.password}
          />
          <InputField
            label="Confirm password"
            inputName="confirmPassword"
            value={data.confirmPassword}
            type="password"
            changeHandler={changeHandler}
            focusHandler={focusHandler}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          />

          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={(event) => changeHandler(event)}
            ></input>
            <label>
              Creating an account means you're okay with our Terms of Service
              and our Privacy Policy.
            </label>
          </div>
          {errors.isAccepted && touched.isAccepted ? (
            <p className={styles.errorMessage}>{errors.isAccepted}</p>
          ) : (
            ""
          )}

          <div>
            <button className={styles.createAccBtn} type="submit">
              Create an Account
            </button>
            <ToastContainer />
            <span>
              Already have an account? &nbsp;
              <Link to="/login">Log in</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
