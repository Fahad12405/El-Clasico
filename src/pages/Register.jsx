import React, { useState } from "react";
import { createUserDocumentFromAuth, createAuthUserFromEmailAndPassword } from "../firebase";
import Button from "../pages/button/button.component";
import FormInput from "../pages/form-input/form-input.component";
import Toast from "../pages/toast/toast.component";
import Navbar from "../components/Navbar"; // Import Navbar component
import Footer from "../components/Footer"; // Import Footer component
import "./sign-up-form.styles.scss";

const statusMessages = {
  1: {
    color: "red",
    message: "Email already in use. Please enter a different email",
  },
  2: { color: "red", message: "Both Passwords do not match" },
  3: { color: "red", message: "Password should be at least 6 characters long" },
};

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError(statusMessages[2]);
      setShowAlert(true);
      return;
    }
    try {
      const { user } = await createAuthUserFromEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError(statusMessages[1]);
        setShowAlert(true);
      } else if (error.code === "auth/weak-password") {
        setError(statusMessages[3]);
        setShowAlert(true);
      }
      console.log("User creation encountered an error", error);
    }
    setTimeout(() => {
      setShowAlert(false);
      setError(null);
    }, 5000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Register with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            required
            onChange={handleChange}
            value={displayName}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={password}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            required
            onChange={handleChange}
            value={confirmPassword}
          />
          <Button type="submit">Register</Button>
          {showAlert && <Toast color={error.color} message={error.message} />}
        </form>
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default SignUpForm;
