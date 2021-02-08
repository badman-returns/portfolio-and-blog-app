import React from "react";
import { useState } from "react";
import AuthenticationService from "../../../services/authentication";

function AuthenticationAndLogin(props) {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    console.log(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    console.log(password);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    AuthenticationService.login(email, Password).then(
      () => {
        props.history.push('/admin/dashboard');
        window.location.reload();
      }
    )
  }
  
  return (
    <section id="login " className='d-flex justify-content-center' style={{margin: '25vh'}}>
      <div
        className="container d-flex justify-content-center"
        style={{ width: "50%" }}
      >
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={onChangeEmail}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={onChangePassword}
              />
            </div>
            <div className="form-group">
            <button
              type="login"
              className="btn btn-primary d-flex justify-content-center"
            >
              Login
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AuthenticationAndLogin;
