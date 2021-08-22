import React, { useState } from "react";

import { credential } from "../../mockData";
import "./Login.css";

const Login = (props) => {
  const [isError, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const loginData = {
      username: username,
      password: enteredPassword,
    };
    console.log("submit data->", loginData);
    console.log("credential data->", credential);
    if (
      loginData.username !== credential.username ||
      loginData.password !== credential.password
    ) {
      setError(true);
    } else {
      props.onLogin(loginData);
    }
  };

  return (
    <div className="login">
      <form onSubmit={submitHandler}>
        <div className="login__controls">
          <div className="login__control">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className="login__control">
            <label>Password</label>
            <input
              type="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
            />
          </div>
        </div>
        {isError && (
          <div className="error">Please enter valid username/password.</div>
        )}
        <div className="login__actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
