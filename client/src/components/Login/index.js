import React, { useState } from "react";
import NavBar from "../NavBar";

const Login = () => {
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    username: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (var value of formData.values()) {
      console.log(value);
    }

    if (formState.login) {
      // call the login Mutation
      const payload = {
        username: formState.username,
        password: formState.password,
      };
      console.log("Call login mutation with ", payload);
    } else {
      // call the signup Mutation
      const payload = {
        username: formState.username,
        password: formState.password,
        email: formState.email,
      };
      console.log("Call signup mutation with ", payload);
    }
  };

  return (
    <>
      <h1>Fluffr</h1>
      <p>Find your Furever Friend</p>
      <NavBar />
      <div className="container text-start">
        <div className="row justify-content-md-center">
          <div className="col-md-8 col-lg-6">
            <h2>{formState.login ? "Login" : "Sign up"}</h2>
            <div className="p-3 border bg-light">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username-login" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formState.username}
                    id="username-login"
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password-login" className="form-label">
                    {formState.login ? "Password" : "Create Password"}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password-login"
                    value={formState.password}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        password: e.target.value,
                      })
                    }
                  />
                  {!formState.login && (
                    <div id="passwordHelp" className="form-text">
                      Password must be 8 characters long.
                    </div>
                  )}
                </div>

                {!formState.login && (
                  <div className="mb-3">
                    <label htmlFor="email-signup" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-signup"
                      aria-describedby="emailHelp"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          email: e.target.value,
                        })
                      }
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                )}
                <button type="submit" className="btn btn-primary me-3">
                  {formState.login ? "Login" : "Create Account"}
                </button>
                <a
                  href="#"
                  onClick={(e) =>
                    setFormState({
                      ...formState,
                      login: !formState.login,
                    })
                  }
                >
                  {formState.login
                    ? "Create new account?"
                    : "Already have an account?"}
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
