export const validator = (data, type) => {
  const errors = {};
  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Please enter your name";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Password do not match!";
    } else {
      delete errors.confirmPassword;
    }

    if (!data.isAccepted) {
      errors.isAccepted = "Acceptance of terms and conditions is required!";
    } else {
      delete errors.isAccepted;
    }
  }

  if (!data.email) {
    errors.email = "Please enter your email address";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Please enter your password";
  } else if (data.password.length < 6) {
    errors.password = "Password must be six or more characters";
  } else {
    delete errors.password;
  }

  return errors;
};
