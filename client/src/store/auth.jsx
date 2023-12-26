import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const logoutUser = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("token");
  };

  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`service frontend error: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    // Assuming there is a userAuthentication function
    // userAuthentication();
  }, []);

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, logoutUser, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isLoggedIn, storeTokenInLS, logoutUser, user, services } =
    useContext(AuthContext);
  if (typeof isLoggedIn === "undefined") {
    throw new Error("useAuth used outside of the Provider");
  }
  return { isLoggedIn, storeTokenInLS, logoutUser, user, services };
};
