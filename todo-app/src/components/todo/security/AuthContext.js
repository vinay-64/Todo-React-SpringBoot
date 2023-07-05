import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

//1: Create a Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

//2: Share the created context with other components
export default function AuthProvider({ children }) {
  //Put some state in the context
  // const [number, setNumber] = useState(10);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  // function login(username, password) {
  //   if (username === "vinay" && password === "kumar") {
  //     setAuthenticated(true);
  //     setUsername(username);
  //     return true;
  //   } else {
  //     setAuthenticated(false);
  //     setUsername(null);
  //     return false;
  //   }
  // }

  async function login(username, password) {
    const baToken = "Basic " + window.btoa(username + ":" + password);

    try {
      const response = await executeBasicAuthenticationService(baToken);

      if (response.status == 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding a token");
          config.headers.Authorization = baToken;
          return config;
        });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  // function login(username, password) {
  //   const baToken = "Basic " + window.btoa(username + ":" + password);

  //   executeBasicAuthenticationService(baToken)
  //     .then((response) => console.log(response))
  //     .catch((error) => console.log(error));

  //   setAuthenticated(false);

  //   // if(username==='in28minutes' && password==='dummy'){
  //   //     setAuthenticated(true)
  //   //     setUsername(username)
  //   //     return true
  //   // } else {
  //   //     setAuthenticated(false)
  //   //     setUsername(null)
  //   //     return false
  //   // }
  // }

  function logout() {
    setAuthenticated(false);
    setUsername(null);
    setToken(null);
  }
  const [username, setUsername] = useState(null); //NEW
  // setInterval(() => setNumber(number + 1), 3000);
  //const valueToBeShared = {number, isAuthenticated, setAuthenticated}

  return (
    <AuthContext.Provider
      // value={{ number, isAuthenticated, login, logout }}
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}
