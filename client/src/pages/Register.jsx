import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        if (res_data.token) {
          storeTokenInLs(res_data.token);
          setUser({
            username: "",
            email: "",
            phone: "",
            password: "",
          });
          alert("Registration Successful");
          navigate("/login");
        } else {
          setError("No token received from the server");
        }
      } else {
        setError("Invalid registration. Please try again.");
      }
    } catch (error) {
      console.error("register", error);
      setError("Registration failed. Please try again later.");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="images/register.png"
                  alt="Registration Illustration"
                  width="500"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
                  </div>
                  <button type="submit" className="btn btn-submit button">
                    Register Now
                  </button>
                </form>
                {error && <div className="error-message">{error}</div>}
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
