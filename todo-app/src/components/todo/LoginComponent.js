import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
  const [username, setUsername] = useState("vinay");

  const [password, setPassword] = useState("");

  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const navigate = useNavigate();

  // const setAuthenticated= useAuth.setAuthenticated();
  const authContext = useAuth();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit() {
    if (authContext.login(username, password)) {
      //NEW
      // authContext.setUsername(username);
      navigate(`/welcome/${username}`);
    } else {
      setShowErrorMessage(true);
      // authContext.setUsername(null);
    }
  }

  // function SuccessMessageComponent() {
  //   if (showSuccessMessage) {
  //     return <div className="successMessage">Authenticated Successfully</div>;
  //   }

  //   return null;
  // }

  function ErrorMessageComponent() {
    if (showErrorMessage) {
      return (
        <div className="errorMessage">
          Authentication Failed. Please check your credentials.
        </div>
      );
    }

    return null;
  }

  return (
    <div className="Login">
      <h1>Time to Login!</h1>
      {/* <SuccessMessageComponent /> */}
      <ErrorMessageComponent />
      <div className="LoginForm">
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            login
          </button>
        </div>
      </div>
    </div>
  );
}
