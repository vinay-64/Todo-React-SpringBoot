// import { useState } from "react";
import "./TodoApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodosComponent from "./ListTodosComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "./LoginComponent";

export default function TodoApp() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<LoginComponent />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route
            path="/welcome/:username"
            element={<WelcomeComponent />}
          ></Route>
          <Route path="*" element={<ErrorComponent />}></Route>
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}
