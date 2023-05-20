import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import styles from "../components/Login.module.css";
import sideImage from "../images/sideImage.jpg";
import { validator } from "./validator";
import { notify } from "./toast";
import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    const result = validator(data, "login");
    setErrors(result);
    console.log(result);
  }, [data, touched]);

  const changeHandler = (event) => {
    const target = event.target;
    setData({ ...data, [target.name]: event.target.value });
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
      notify("You loged in successfully !", "success");
    } else {
      setTouched({
        email: true,
        password: true,
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
          <h2>Welcome Back!</h2>
          <p>The worst form of injustice is pretended justice. plato</p>

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

          <div>
            <button className={styles.createAccBtn} type="submit">
              Login
            </button>
            <ToastContainer />
            <span>
              Don't have an account yet? &nbsp;
              <Link to="/signup">Signup</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
