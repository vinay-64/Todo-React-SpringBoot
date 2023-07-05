import { createContext, useContext, useState } from "react";

//1: Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2: Share the created context with other components
export default function AuthProvider({ children }) {
  //Put some state in the context
  // const [number, setNumber] = useState(10);

  const [isAuthenticated, setAuthenticated] = useState(false);

  function login(username, password) {
    if (username === "vinay" && password === "kumar") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setAuthenticated(false);
      setUsername(null);
      return false;
    }
  }
  function logout() {
    setAuthenticated(false);
  }
  const [username, setUsername] = useState(null); //NEW
  // setInterval(() => setNumber(number + 1), 3000);
  //const valueToBeShared = {number, isAuthenticated, setAuthenticated}

  return (
    <AuthContext.Provider
      // value={{ number, isAuthenticated, login, logout }}
      value={{ isAuthenticated, login, logout, username }}
    >
      {children}
    </AuthContext.Provider>
  );
}
