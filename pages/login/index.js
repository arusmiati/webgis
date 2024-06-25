import React, { useState } from "react";
import Router from "next/router";
import Head from "next/head";
import background from "../../public/login.jpg"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirect ke halaman homepage jika login berhasil
        Router.push("/homepage");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <>
    <Head>
      <link rel="stylesheet" type="text/css" href="../main.css" />
    </Head>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 p-0 m-0">
          <div className="img-container">
            <img src={background} alt="" />
          </div>
        </div>
      </div>
      <div className="col-md-4 login-container p-0 m-0 d-flex justify-content-center align-items-center vh-100">
          <div className="w-75">
            <h1
              className="font-weight-bold text-center"
              style={{ color: "#7d7878" }}
            >
              WELCOME
            </h1>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" variant="primary">Login</button>
        {error && <p className="error underline">{error}</p>}
      </form>
      </div>
    </div>
    </div>
    </>
    
  );
}

export default Login;
