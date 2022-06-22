import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { actions } = useContext(Context);
  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          onClick={() => {
            actions.register(email, password);
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
