// import { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "./LoginComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) return children;

  return <Navigate to="/" />;
}

export default function TodoApp() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />

          <Routes>
            <Route path="/" element={<LoginComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponent />
                </AuthenticatedRoute>
              }
            />

            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<ErrorComponent />}></Route>
            {/* <Route path="/todos" element={<ListTodosComponent />} />
            <Route path="/logout" element={<LogoutComponent />} /> */}
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
